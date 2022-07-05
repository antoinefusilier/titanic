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
export const docsConfirm = new Promise<any>((resolve, reject) => {
  if (docsGetted[0] !== null || docsGetted.length < 0) {
    resolve("Document")
  } else {
    reject("No document find")
  }
})
export const survived: Array<any> = [];
export const not_survived: Array<any> = [];


@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  auth = getAuth(app);
  data: any;
  dataLength: number;
  all_age: []  = [];

  constructor(private dS: DataService) {
    // Resetting docsId
    docsId.length = 0;

    this.data = dS.getData();
    // console.log(this.data.data[1])
    this.dataLength = this.data.data.length;
    // console.log(this.dataLength);

  }

// https://firebase.google.com/docs/firestore/query-data/queries
  async getDocsId(
    sex: string,
    min_age: string,
    max_age: string,
    Pclass: string,
    searchType: string
    ){
    console.log("Lancement de getDocsId");
    console.log(Pclass);
    // >> SAC
    const sex_Age_C = query(trainRef,
      where("Sex", "==", sex),
      where("Age", ">", " " + min_age),
      where("Age", "<", " " + max_age),
      where("Pclass", "==", Pclass)
    );
    const Age_C = query(trainRef,
      where("Age", ">", " " + min_age),
      where("Age", "<", " " + max_age),
      where("Pclass", "==", Pclass)
    );
    // >> SA
    const sex_Age = query(trainRef,
      where("Sex", "==", sex),
      where("Age", ">", " " + min_age),
      where("Age", "<", " " + max_age),
    );
    const Age = query(trainRef,
      where("Age", ">", " " + min_age),
      where("Age", "<", " " + max_age),
    );

    // Conditions
    if (searchType == "SAC") {
      // get With specified sex, age and class
      const gSex_age_c = await getDocs(sex_Age_C);
      this.callPush(gSex_age_c);
      console.log('SEARCH TYPE = SAC');

    }
    if (searchType == "AC") {
      // get With all sexes specified age and class
      const gAge_c = await getDocs(Age_C);
      this.callPush(gAge_c);
      console.log('SEARCH TYPE = AC');

    }
    if (searchType == "SA") {
      // get With all classes specified sex and age
      const gSex_age = await getDocs(sex_Age);
      this.callPush(gSex_age);
      console.log('SEARCH TYPE = SA');

    }
    if(searchType == "A"){
      console.log("Condition A accepted");
      // get With all sex, all classes, and specified age
      const docs = await getDocs(Age);
      this.callPush(docs);
      console.log('SEARCH TYPE = A');

    }

    // Call to collect method
    this.getDocsById();
  }
  callPush(docs:any) {
    console.log('callPushaccepted');
    // docsId.length = 0;
    docs.forEach((doct:any) => {
      docsId.push(doct.id);
    });

  }
  // Docs collect method
  // https://stackoverflow.com/questions/9298839/is-it-possible-to-stop-javascript-execution

  async getDocsById(){

    for(let i = 0; i<docsId.length; i++){
      var docu = doc(db, "train_passengers", docsId[i]);
      // console.log(docsId[i]);

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
    console.log('getDocsById: final',docsGetted);
    docsConfirm.then(()=>{
      console.log("Its confirmmmmmmmmmmm !!");

    }).catch(()=>{
      console.log("Its not confirm ://!!");

    });
    this.static()
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
  static() {
    for (let i = 0; i < docsGetted.length; i++) {
      if (docsGetted[i].Survived == " 1") {
        survived.push(docsGetted[i])

      }
      if (docsGetted[i].Survived == " 0") {
        not_survived.push(docsGetted[i])
      }
    }
    console.log('const survived statistic',survived);
    console.log('const survived statistic',not_survived);

  }
}
// TEST but not possible because interdition of multiple sigle equation in a same field.
  //
  // async getDocsId(
  //   fem_eq: any,
  //   male_eq: any,
  //   min_age: string,
  //   max_age: string,
  //   P1_eq: any,
  //   P2_eq: any,
  //   P3_eq: any,
  // ) {

  //   const q2 = query(trainRef,
  //     where("Sex", fem_eq, " female"),
  //     where("Sex", male_eq, " male"),
  //     where("Age", ">", min_age),
  //     where("Age", "<", max_age),
  //     where("Pclass", P1_eq, " 1"),
  //     where("Pclass", P2_eq, " 2"),
  //     where("Pclass", P3_eq, " 3"),

  //   );


  //   const querySnapshot = await getDocs(q2);
  //   querySnapshot.forEach((doct) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     // console.log(doc.id, " => ", doc.data());

  //     docsId.push(doct.id);
  //   });
  //   // Call to collect method
  //   this.getDocsById();
  // }

