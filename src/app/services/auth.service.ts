import { Injectable } from '@angular/core';
// Import Firebase Service
// import { FirebaseService } from './firebase.service';
// Import if firebase authentification modules
import { initializeApp } from "firebase/app";

import { environment as env } from 'src/environments/environment';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ActivatedRoute, Router } from '@angular/router';

// https://angular.io/errors/NG0200
// App initialisation
const app = initializeApp(env.firebase);

const auth = getAuth(app);


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uid: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  signIn(email:string,password:string){
    signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('Firebase User :',user);
        this.router.navigate(['/admin/analyzes']);
        localStorage.setItem('uid', user.uid);
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            this.uid = user.uid;
            localStorage.setItem('connected', 'true');
            // localStorage.setItem('uid', this.uid);
            return true;
            // ...
          } else {
            // User is signed out
            // ...
            localStorage.setItem('connected', 'false');

            return false;
          }
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

      console.log(this.uid);
  }

  userConfirm() {

  }

}
