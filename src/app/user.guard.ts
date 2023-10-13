import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthService } from './services/auth.service';
import { initializeApp } from "firebase/app";

import { environment as env } from 'src/environments/environment';


const app = initializeApp(env.firebase);

const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  uid: string = this.aS.uid;
  constructor(private aS: AuthService){
    console.log(this.uid);

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // let userUid = localStorage.getItem('userUid');

    // let confirm: boolean | any = this.userConfirm();
    if (localStorage.getItem('connected') === 'true'
    // && localStorage.getItem('uid') == this.uid
    ){
      return true
    } else {
      return false
    }
    // return true;
  }


}
