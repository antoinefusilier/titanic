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

## Install of principals services

Into ./app-titanic/src/app :
- FirebaseService: `ng g s services/Firebase`
- DataService: `ng g s services/data`
- AuthService: `ng g s services/auth`
- GuardService: `ng g s services/guard`
- AnalyseService: `ng g s services/analyse`

## Install of admin module

- admin: `ng g m admin`


## Install of prinpals componants 

- login : `ng g c login`
- analyzes : `ng g c admin/analyzes`
- result : `ng g c admin/result`
- search : `ng g c admin/search`
- menu : `ng g c admin/search/menu`


## Install first Interfaces

1. Delete/remplance into app.component.html by `<app-root></app-root>`
2. Install bootstrap `npm i bootstrap`
3. Import bootstrap styles into ./src/app/styles.scss `@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";`
4. Import Javascript of Bootstrap into ./src/app/polyfills.ts `import 'bootstrap';`

### Login Component
1. Find a form login : https://getbootstrap.com/docs/5.2/forms/overview/

## Get Datas
1. Download CSV By Chrome Sources : F12 > Sources > train.csv > Save as 
2. (optional) Download Extension Edit csv >> https://marketplace.visualstudio.com/items?itemName=janisdd.vscode-edit-csv
3. Installation de PapaPase : `npm install ngx-papaparse@latest --save`
4. Importer Papa dans DataService et tester papa parse

>> FirebaseService

### Principals Imports
- 
```typescript
// Firebase APP
import { initializeApp } from 'firebase/app';
// Firebase Firestore
import { getFirestore, collection, getDoc, setDoc, doc } from 'firebase/firestore';
// Environment
import { environment as env } from 'src/environments/environment';
// Http request
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
```
### Firebase & http Initialization

```typescript
// App initialisation
export const app = initializeApp(env.firebase);
// GET database Firestore
export const db = getFirestore(app);

// Initialisation of HTTP OPTIONS Service
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};
```
>> adding data url into environment

```typescript
,
dataUrl: "https://raw.githubusercontent.com/hkacmaz/Titanic-Passenger-Survivors/master/train.csv",

```