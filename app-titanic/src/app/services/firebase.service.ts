import { Injectable } from '@angular/core';
// Firebase APP
import { initializeApp } from 'firebase/app';
// Firebase Firestore
import { getFirestore, collection, getDoc, setDoc, doc } from 'firebase/firestore';
// Environment
import { environment as env } from 'src/environments/environment';
// Http request
import { HttpParams, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { map, Observable } from 'rxjs';

// App initialisation
export const app = initializeApp(env.firebase);
// GET database Firestore
export const db = getFirestore(app);

// Initialisation of HTTP OPTIONS Service
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     Authorization: 'my-auth-token'
//   })
// };

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor() { }


}
