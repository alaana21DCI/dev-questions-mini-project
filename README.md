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

- **Avatar/Profilbild**: Der User kann beim Erstellen des Accounts einen Avatar hochladen. dieser wird bei den Antworten des Users (Question-Page) dargestellt
- **Such-Funktion**: Der User kann nach einem Search-Term über die Question-Liste filtern

## Models

![model-Relation](https://user-images.githubusercontent.com/81626271/194762669-4ff68ae1-96b9-4b8e-bd10-d7b9273575a1.png)

## Endpunkte

### GET /questions

liefert uns eine `Liste` aller Questions zurück

Response:

```javascript
[
  {
    title: "Was kann PreventDefault() tun ?",
    description: "....",
    category: "JS",
    user: {
      email: "user1@mail.de",
      name: "Hans Müler",
    },
    answers: [
      {
        description: "........",
      },
    ],
  },
  {
    title: "Was kann XY tun  ?",
    description: "....",
    category: "HTML",
    user: {
      email: "user2@mail.de",
      name: "Schiri Schnee",
    },
    answers: [
      {
        description: "........",
      },
    ],
  },
];
```

### GET /qustions/[:id]

liefert uns eine `einzelne` Qstion zurück.

Response:

```javascript
  {
    title: "Was kann PreventDefault() tun ?",
    description: "....",
    category: "JS",
    user: {
      email: "user1@mail.de",
      name: "Hans Müler",
    },
    answers: [
      {
        description: "........",
      },
    ],
  }
```

### POST /questions

erstellt eine neue Question.

Request:

```javascript
  {
    title:"Was kann PreventDefault() tun ?",
    description: "....",
    category: "JS",
    user: "skjdlkejkceikjxsödke",
  }
```

Response:

```javascript
  {
    _id:"mksjdsd1233"
    title:"Was kann PreventDefault() tun ?",
    description: "....",
    category: "JS",
    user: "skjdlkejkceikjxsödke",
  }
```

### POST /answers

erstellt eine Antwort für eine Question

Request:

```javascript
  {
    question: "mksjdsd1233",
    user: "skjdlkejkceikjxsödke",
    description: "............",
  }
```

Response:

```javascript
{
  _id: "244435fwwkjasw",
  question: "mksjdsd1233",
  user: "skjdlkejkceikjxsödke",
  description: "............",
}
```

### POST /user/login

logged den User ein.

Request:

```javascript
  {
    email: "user1@mail.de",
    password: "123456",
  }
```

Response:

```javascript
{
  _id: "244435fwwkjasw",
  email: "user1@mail.de",
  name: "Hans Müler",
  answers: []
  questions: [
    "mksjdsd1233"
  ]
}
```

### POST /user/register

erstellt einen neuen User und loggt ihn ein.

Request:

```javascript
  {
    name: "Hans Müler",
    email: "user1@mail.de",
    password: "123456",
  }
```

Response:

```javascript
{
  _id: "244435fwwkjasw",
  email: "user1@mail.de",
  name: "Hans Müler",
  answers: []
  questions: []
}
```

### POST /user/logout

der usertoken cookie wird gelöscht, der token wid aud der Datenbank entfernt

Request:

```javascript
{
}
```

Response:

```javascript
true;
```

ssh root@ -A
