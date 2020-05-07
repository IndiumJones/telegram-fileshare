const telegram = require('telegram-bot-api');
const fs = require('fs');
const https = require('https');
const config = require('./config.json');

var api = new telegram({
	token: config.token,
	updates: {
		enabled: true,
		get_interval: 1000
	}
});

function checkUser(user) {
    return new Promise(resolve => {
        fs.readFile("config.json", (err, data) => {
            if (err) {
                resolve(false);
            } else {
    
                let obj = JSON.parse(data);

                resolve(obj.users.includes(user));

            }
        });
    });
};

function downloadFile(file_id,message) {
    return new Promise(resolve => {
        api.getFile({
            "file_id" : file_id
        })
        .then(function(data)
        {
            if (data.file_size <= config.maxSize && data.file_size <= 20971520) {
                let a = data.file_path.split(".");
                if (config.supportedFormats.includes(a[a.length - 1].toLowerCase())) {
                    let file_path = `https://api.telegram.org/file/bot${config.token}/${data.file_path}`;
                    
                    https.get(file_path, (res) => {
                        let { statusCode } = res;
                        let contentType = res.headers['content-type'];

                        if (statusCode !== 200) {
                            res.resume();
                            resolve({
                                chat_id: message.chat.id,
                                text: `internal error T1\nhttp-code: ${statusCode}`
                            });
                        } else if (!/^application\/octet-stream/.test(contentType)) {
                            res.resume();
                            resolve({
                                chat_id: message.chat.id,
                                text: `internal error T2\ncontent-type: ${contentType}`
                            });
                        } else {
                            
                            let files = fs.readdirSync(`${config.downloadPath}`);
                            
                            if (message.caption) {
                                var filename = `${message.caption.toLowerCase().replace(/\//g,"")}.${a[a.length - 1]}`;
                            } else {
                                var filename = `${Date.now()}.${a[a.length - 1]}`;
                            }

                            if (files.includes(filename)) {
                                resolve({
                                    chat_id: message.chat.id,
                                    text: `error F3\nUnter diesem Dateinamen existiert bereits eine Datei`
                                });
                            } else {
                                const file = fs.createWriteStream(`${config.downloadPath}/${filename}`);
                                res.pipe(file);

                                res.on('end', () => {
                                    resolve({
                                        chat_id: message.chat.id,
                                        text: `Download abgeschlossen`
                                    });
                                });
                            }

                        }
                    });
                    
                } else {
                    resolve({
                        chat_id: message.chat.id,
                        text: `error F1\nDas Dateiformat .${a[a.length - 1].toLowerCase()} wird nicht unterstützt\nUm Dateien dieses Typs zu verschicken, passen Sie die Konfiguration entsprechend an`
                    });
                }
            } else {
                resolve({
                    chat_id: message.chat.id,
                    text: `error F2\nDie Datei ist zu groß. Die Maximalgröße laut Konfiguration beträgt ${config.maxSize} Bytes\nAllerdings werden von Telegram keine Dateien, die größer als 20MB sind, akzeptiert`
                });
            }
            
        })
        .catch(function(err)
        {
            resolve({
                chat_id: message.chat.id,
                text: `internal error T3\n${err}`
            });
        }
        );
    
    });
};

function addUser(message) {
    return new Promise(resolve => {

        if (message.text === config.password) {

            fs.readFile("config.json", (err, data) => {
                if (err) {
                    resolve({
                        chat_id: message.chat.id,
                        text: "internal error C1\nfailed to open config"
                    });
                } else {
        
                    let obj = JSON.parse(data);
                    obj.users.push(message.chat.id);
                    let str = JSON.stringify(obj);
        
                    fs.writeFile("config.json", str, function (err) {
                        if (err) {
                            resolve({
                                chat_id: message.chat.id,
                                text: "internal error C2\nfailed to edit config"
                            });
                        } else {
                            resolve({
                                chat_id: message.chat.id,
                                text: "Passwort richtig!"
                            });
                        }
                    });
    
                }
            });

        } else {
            resolve({
                chat_id: message.chat.id,
                text: "error A1\nAuthentifizierung fehlgeschlagen!"
            });
        }

    });
};

api.on('message', async function(message) {

    if (await checkUser(message.chat.id)) {
    
        if (message.photo) {
    
            let highWidth = 0;
            let file_id = "";
            for (photoObj of message.photo) {
                if (photoObj.width > highWidth) {
                    highWidth = photoObj.width;
                    file_id = photoObj.file_id;
                }
            }
    
            var resObj = await downloadFile(file_id, message);
    
        } else if (message.video) {
    
            var resObj = await downloadFile(message.video.file_id, message);
    
        } else if (message.document) {
    
            var resObj = await downloadFile(message.document.file_id, message);
    
        } else if (message.audio) {
    
            var resObj = await downloadFile(message.audio.file_id, message);
    
        } else {
            var resObj = {
                chat_id: message.chat.id,
                text: "Sie sind angemeldet. Bitte senden Sie eine kompatible Datei"
            };
        }
    }
        
    else {

        if (message.text === "/start") {
            var resObj = {
                chat_id: message.chat.id,
                text: "Um diesen Bot zu nutzen, müssen Sie ein Passwort eingeben"
            };
        } else {
            var resObj = await addUser(message);
        }

    }
    
    api.sendMessage(resObj);
});