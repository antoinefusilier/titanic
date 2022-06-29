import { Injectable } from '@angular/core';
// Firebase APP
import { initializeApp } from 'firebase/app';
// Firebase Firestore
import { getFirestore, collection, getDoc,getDocs, setDoc, doc, query, where, QuerySnapshot } from 'firebase/firestore';
// Environment
import { environment as env } from 'src/environments/environment';
// Http request
import { HttpParams, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { DataService } from './data.service';

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

  data: any;
  dataLength: number;

  constructor(private dS: DataService) {
    this.data = dS.getData();
    // console.log(this.data.data[1])
    this.dataLength = this.data.data.length;
    // console.log(this.dataLength);

  }

  async pushDataToFB(){


    for(let i = 0 ; i < this.dataLength ; i++){
      let this_doc = query(collection(db, "train_passengers"), where("id", "==", i));

      let doc_exist = false;

      let docsSnap = await getDocs(this_doc);
      docsSnap.forEach((doc) => {
        if(doc.ref){
          doc_exist = true;
        }
      });
      console.log('ID :'+i+' Document Exist ?', doc_exist)

      if (doc_exist === false) {
        await setDoc(doc(db, "train_passengers", this.dS.generateDocId(20)), {
          id: this.data.data[i].id,
          Survived: this.data.data[i].Survived,
          Pclass: this.data.data[i].Pclass,
          Name: this.data.data[i].Name,
          Sex: this.data.data[i].Sex,
          Age: this.data.data[i].Age,
          SibSp: this.data.data[i].SibSp,
          Parch: this.data.data[i].Parch,
          Ticket: this.data.data[i].Ticket,
          Fare: this.data.data[i].Fare,
          Cabin: this.data.data[i].Cabin,
          Embarked: this.data.data[i].Embarked
        });
      } else {
        continue;

      }
    }
  }
}
