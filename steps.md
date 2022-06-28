# Titanic Project Steps

## Install


- `ng new app-titanic`
- - angular routing
- - SCSS

In firebase consol

- create a new projet : "titanic"
- firebase analytics

in /firestore Database 

- create a new database
- in production mode
- Zone Cloud Firestore : eur3(europe-west)
- activation

>> Authentification/Sing-in Method
Add ***Email/Password*** and ***Google*** ACTIVE
Add Provideur ***Google*** 
- Project Public ID: project-284182339070
- Assistance Email : ***email***
- Authorization List : Define later
- SDK ... : Define later
SAVE


Check if recommanded : Connection by email link
https://firebase.google.com/docs/auth/web/email-link-auth?hl=fr&authuser=0



>> firestore_database/Rules
For activate autorisation

- change `allow read, write: if ` ***false*** in ***true*** and publish


>> Angular Titanic Projet




>> firebase/setting of projet/ Yours application / Web
- Save new app `titanic`
- OK Config Firebase Hosting for this app
- - (Any deploy now)

- use npm
- `sudo npm install firebase` and follow config


In ./app-titanic/src/environements/environment.ts
adding variable objet `firebase {}` with project config in

``` typescript

firebase {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""

}

```
Installation de Firebase CLI (Firebase Tools)
- `npm i -g firebase-tools`


Mettre à jours node 
- `curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -`
- `sudo apt-get install -y nodejs`

Suppression des dernières versions de Node et autre programme expirés
- `sudo autoremove`

Confirmation and verification of updates
- `sudo apt update && sudo apt upgrade`

Vérification of node version (must be higth to v14.18)
- `node -v`
`v16.15.1`

Connection to firebase (authentification)
- `firebase login ` and follow the authentification Link
`Success! Logged in as `***email***

- ./app-titanic `sudo npm i firebase`

Verification of project List
- `firebase projects:list`

## Start of the projet

- init `firebase init`
- - select `firestore` and confirm