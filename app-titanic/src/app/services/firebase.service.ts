import { Injectable } from '@angular/core';
// Firebase APP
import { initializeApp } from 'firebase/app';
// Firebase Firestore
import { getFirestore, collection, getDoc,getDocs, setDoc, doc, query, where } from 'firebase/firestore';
// Environment
import { environment as env } from 'src/environments/environment';
// Http request
// import { HttpParams, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { DataService } from './data.service';
import { getAuth } from 'firebase/auth';
import { ReturnStatement } from '@angular/compiler';

// App initialisation
const app = initializeApp(env.firebase);
// GET database Firestore
const db = getFirestore(app);


// Initialisation of HTTP OPTIONS Service
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     Authorization: 'my-auth-token'
//   })
// };
const trainRef = collection(db, "train_passengers");

const q = query(trainRef, where("Age", ">", " 10"));

export const docsId: Array<any> = [];
export const docsGetted: Array<any> = [];

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  auth = getAuth(app);
  data: any;
  dataLength: number;
  all_age: []  = [];

  constructor(private dS: DataService) {
    this.data = dS.getData();
    // console.log(this.data.data[1])
    this.dataLength = this.data.data.length;
    // console.log(this.dataLength);

  }


  async getDocsId(sex:string, min_age:string, max_age:string, Pclass:string){
    const q2 = query(trainRef, where("Sex", "==", sex), where("Age", ">", min_age), where("Age", "<", max_age), where("Pclass", "==", Pclass));
    const querySnapshot = await getDocs(q2);
    querySnapshot.forEach((doct) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());

      docsId.push(doct.id);
    });
    // Call to collect method
    this.getDocsById();
  }
  // Docs collect method
  async getDocsById(){

    for(let i = 0; i<docsId.length; i++){
      var docu = doc(db, "train_passengers", docsId[i]);
      console.log(docsId[i]);

      var getted_doc = await getDoc(docu);

      if (getted_doc.exists()) {
        console.log("Document data:", getted_doc.data());
        docsGetted.push(getted_doc.data())
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      getted_doc.get
      console.log(getted_doc.get);

      docsGetted.push(getted_doc.data())
      // allDocs.push(getted_doc.data)

    }
  }



  async collect(sex: string, ages: [min_age: number, max_age: number], classes: Array<number>){
    // let search = query(collection(db, "train_passengers"),
    //   where("Age", ">", ages[0]),
    //   where("Age", "<", ages[1])


    // );

    // let q = query(collection(db, "train_passengers"), where('Age', "==",  "40"));
    // console.log('Query: ',q);
    // q =  q.converter
    // let test = await getDocs(q);
    // console.log('Test: ',test);
    // test.forEach(element => {
    //   console.log('Passenger Document Id : ',element.id);
    // });
    let querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>
      console.log(doc.id, "and data : ")
    )
    // where("Sex", "==", sex),
    // let condi = query(search,where("Age", ">", ages[0]));
    // condi = query(search, where("Age", "<", ages[1]));
    // if(sex !== 'all'){
      // condi = query(search, where("Sex", "==", sex));
    // }
    // if (classes[0]){
      // for (let i = 0; i < classes.length; i++){
        // condi = query(search, where("Pclass", "==", classes[i]));
      // }
    // }
    // console.log('Recherche Collect: ',search);
  }

  async pushDataToFB(){
    // this.dataLength

    for (let i = 0; i < this.dataLength ; i++){
      let this_doc = query(collection(db, "train_passengers"), where("PassengerId", "==", " "+i));

      let doc_exist = false;

      let docsSnap = await getDocs(this_doc);
      docsSnap.forEach((doc) => {
        if(doc.ref){
          doc_exist = true;
        }
      });
      console.log('ID :'+i+' Document Exist ?', doc_exist)

      if (doc_exist === false) {
        // console.log(this.data.data[i].PassengerId);
        // console.log(this.data.data[i].Survived);
        // console.log(this.data.data[i].Pclass);
        // https://fr.acervolima.com/comment-supprimer-un-caractere-d-une-string-en-javascript/
        // https://fr.acervolima.com/comment-supprimer-tous-les-sauts-de-ligne-d-une-string-a-l-aide-de-javascript/
        // console.log('FirstName: ',this.data.data[i].FirstName);
        // console.log('Name :',this.data.data[i].Name);
        // console.log('Sexe : ',this.data.data[i].Sex);
        // console.log('Age : ',this.data.data[i].Age);
        // console.log(this.data.data[i].SibSp);
        // console.log(this.data.data[i].Parch);
        // console.log(this.data.data[i].Ticket);
        // console.log('Fare: ',this.data.data[i].Fare);
        // console.log('Cabine: ',this.data.data[i].Cabin);
        // console.log('Embarked: ',this.data.data[i].Embarked);


        await setDoc(doc(db, "train_passengers", this.dS.generateDocId(20)), {
          id: this.data.data[i].PassengerId,
          Survived: this.data.data[i].Survived,
          Pclass: this.data.data[i].Pclass,
          FirstName: this.data.data[i].FirstName,
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
