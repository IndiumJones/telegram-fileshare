# telegram-fileshare
Telegram Bot that automatically downloads the files you send

- [english](#english)
- [deutsch](#deutsch)

## deutsch

### Inhalt

- [Beschreibung](#Beschreibung)
  - [Version 1.1.1](#neu-in-Version-111)
  - [Version 1.1.0](#neu-in-Version-110)
  - [Version 1.0.0](#neu-in-Version-100)
- [Einrichtung](#Einrichtung)
- [Fehlercodes](#Fehlercodes)

### Beschreibung

Erstellen Sie Ihren ganz eigenen Telegram-Bot. Sie und Ihre Freunde können diesem einfach die Dateien als Nachricht schicken und der Bot lädt diese automatisch auf den Computer herunter.
Treffen Sie verschiedene Einstellungen, um den Bot sicherer zu machen und Die können ihn ganz nach Ihren Vorstellungen nutzen.

#### neu in Version 1.1.1

* Benutzerdefinierte Dateinamen

#### neu in Version 1.1.0

* Es kann eine maximale Dateigröße vom Benutzer festgelegt werden
* Es kann ein Ordner ausgewählt werden, in dem die Dateien gespeichert werden sollen
* bug fixed:
    * Dateiendung in Groß- und Kleinschreibung werden erkannt

#### in Version 1.0.0

* Benutzerdefiniertes Passwort, das vor dem Nutzen eigegeben werden muss
* Liste an unterstützten Dateiendungen

### Einrichtung

1. Laden Sie sich [Node.js](https://nodejs.org/en/) herunter
1. Laden Sie sich die Datei **fileshare_x_x_x.js** herunter
1. Öffnen Sie die **Konsole** (cmd.exe) und betreten Sie den Ordner, in welchem die Datei gespeichert ist
1. Laden Sie sich die **"telegram-bot-api"** herunter, indem Sie *npm install telegram-bot-api* in die Konsole eingeben
1. Erstellen Sie einen **Telegram-Bot**
    1. Öffnen Sie den Chat mit [@BotFather](https://t.me/botfather)
    1. Geben Sie */newbot* ein
    1. Geben Sie nun einen Namen und einen Nutzernamen für den Bot ein
    1. Nun erhalten Sie den Token für den Bot. Dieser wird für die Kommunikation benötigt
    1. Geben Sie */setjoingroups* ein
    1. Setzen Sie den Wert auf *Disable*
    1. Geben Sie weitere Informationen ein, um den Bot anzupassen: */setdescription /setabouttext /setuserpic*
1. Erstellen Sie einen **Ordner**, in welchem die Dateien gespeichert werden sollen
1. Konfigurieren Sie Ihren Bot mithilfe der **config.json** Datei
    * Manuell über einen Editor
        1. Öffnen Sie die **config.json** Datei mit einem Editor und fügen Sie den **Token** ein, den Ihnen der [@BotFather](https://t.me/botfather) geschickt hat
        1. Legen Sie ein **Passwort** fest
        1. Passen Sie die Liste der **unterstützten Dateiformate** an
        1. Legen Sie eine **maximale Dateigröße** fest (Telegram unterstützt nur Dateien bis 20 MB)
        1. Geben Sie den **Pfad** des Ordners an, den Sie gerade erstellt haben
1. **Starten Sie das Programm**, indem Sie *node fileshare_x_x_x.js* eingeben

### Fehlercodes

#### T

Fehler beim Herunterladen der Datei
* **T1:** HTTP-Statuscode (Die Datei konnte nicht heruntergeladen werden)
* **T2:** content-type (Die Datei konnte nicht heruntergeladen werden)
* **T3:** Dateiinformationen (Fehler beim Laden der Dateiinformationen vom Telegarm-Server)

#### F

Die Datei entspricht nicht den Anforderungen des Bots
* **F1:** Dateiformat (Das Dateiformat, i.d.F. die Dateiendung, ist nicht in der Liste der erlaubten Dateiendungen enthalten)
* **F2:** Dateigröße (Die Datei ist größer als die in der config.json festgelegte Größe oder überschreitet die von Telegram vorgegebenen 20 MB)
* **F3:** Dateiname (Eine Datei mit dem Namen existiert schon. Wählen Sie einen anderen Dateinamen)

#### C

Fehler beim öffnen oder schließen der Konfigurationsdatei (config.json)
* **C1:** open config (Fehler beim Öffnen der config.json Datei)
* **C2:** write config (Fehler beim Speichern der Änderung in der config.json Datei)

#### A

Fehler bei der Authentifizierung des Nutzers
* **A1:** Authentifizierung (Das eingegebene Passwort ist falsch)

## english

### content

- [description](#description)
  - [version 1.1.1](#new-in-version-111)
  - [version 1.1.0](#new-in-version-110)
  - [version 1.0.0](#new-in-version-100)
- [setup](#setup)
- [error code](#error-codes)

### description

Create your very own Telegram bot. You and your friends can easily send files
and the bot downloads them for you. You can configure the bot as you wish.

#### new in version 1.1.1

* user defined file names

#### new in version 1.1.0

* the user can set the maximal file size
* the user can specify a folder where the file will be stored
* bug fixed:
	* file extension can be in capital and lowercase letters
	
#### new in version 1.0.0

* custom password
* list of supported file extensions

### setup

1. download and install [Node.js](https://nodejs.org/en/)
1. download the file: **fileshare_x_x_x.js**
1. open the **command shell** (cmd.exe) and open the folder where the file fileshare_x_x_x.js is located
1. download the **'telegram-bot-api'** by entering the command *npm i telegram-bot-api*
1. create a **Telegram bot**
    1. open the chat with [@BotFather](https://t.me/botfather)
    1. type */newbot*
    1. specify a name and a username for the bot
    1. you will receive a token for the bot
    1. type */setjoingroups*
    1. set the value to *Disable*
    1. you can save more informations about the bot: */setdescription, /setabouttext, /setuserpic*
1. create a **folder** where the files should be saved
1. configure the bot by editing the **config.json** file
    * manualy with an editor
        1. open the **config.json** file and add the **token** from [@BotFather](https://t.me/botfather)
        1. set a **password**
        1. customize the list of **supported file extensions**
        1. set **maximal file size** (Telegram only support files up to 20 MB)
        1. set the **path** to the destination of the folder you just have created
1. **start the bot** by typing *node fileshare_x_x_x.js* into the command shell

### error codes

#### T

An error occured during the download
* **T1:** http-status-codes (unable to download the file)
* **T2:** content-type (unable to download the file)
* **T3:** file informations (error during the fetching process)

#### F

The file does not match the bots requirements
* **F1:** file format (the file extension does not match the file extension list)
* **F2:** file size (file exceeds the maximal file size, the maximum is 20 MB)
* **F3:** file name (file already exists)

#### C

An error occured during the configuation process
* **C1:** open config (cannot open config.json)
* **C2:** write config (error during the saving process)

#### A

An error occured during the authentification process
* **A1:** wrong password
