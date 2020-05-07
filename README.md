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
        1. Geben Sie den **Ordner** an, in welchem die **Dateien gespeichert** werden sollen (Stellen Sie sicher, dass der Ordner existiert)
    * Über das [Formular](https://software.pallindium.de/fileshare/configgenerator)
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

*we're working on a translation*
