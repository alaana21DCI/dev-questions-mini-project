# dev-questions-mini-project

## Features

- **Register**: Der User kann sich einen Account erstellen und meldet sich damit automatisch an
- **Login**: Der User kann über eine Anmelde-Maske sich in seinen Account einloggen
- **Logout**: Der User kann sich aus seinem Account wieder ausloggen
- **Question erstellen**: Der User kann über ein Formular Title und Description (und Kategorie) angeben. Diese Question wird dann in der Datenbank gespeichert
- **Questions**: Es können Fragen erstellt werden. Diese werden auf dem Server mit mongodb gespeichert. Der User kann eine Liste von Fragen sehen. Er kann eine Detailansicht der Frage sehen wo mehr als nur der Titel enthalten ist
- **Answer**: Der User kann über ein Eingabeformular eine Antwort für eine Answer erstellen. Diese Antwort wird in der UI auf der Question-Page dargestellt und in der Datenbank gespeichert

### Optional Features - 1

- **Account-Update**: Der User kann seine persönlichen Daten ändern (Name & Avatar)
- **Kategorie-Filter**: Es gibt eine feste Liste von Kategorien. Der User kann diese Kategorien als Filter für die Question-Liste verwenden. Die Kategorie wird bei der Erstellung einer Question definiert

### Optional Features - 2

- **Pagination**: Die Liste der Fragen ist auf 5 Fragen begrenzt. Es gibt einen Button welcher die nächsten 5 Fragen nachladen kann
- **User-Question-List**: Der User kann im Account-Bereich eine Liste seiner eigenen Fragen sehen
- **User-Answer-List**: Der User kann im Account-Bereich eine Liste seiner Antworten (zu Fragen) sehen
- **Avatar**: Der User kann beim Erstellen des Accounts einen Avatar hochladen. dieser wird bei den Antworten des Users (Question-Page) dargestellt
- **Such-Funktion**: Der User kann nach einem Search-Term über die Question-Liste filtern

## Models

![Model-Relations](images/ModelsRelation.png)
