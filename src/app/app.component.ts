import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

import { DataService } from './services/data.service';
// INTERFACES #########################
import { db_update } from './interfaces/firebase';
import { __values } from 'tslib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-titanic';
  clicked = false;
  DB_update: db_update | Promise<void> = new Promise((resolve,reject)=>{
    if(this.clicked === true){
      resolve(__values(this.DB_update));
    } else {
      reject();
    }
  });

  constructor(private fS: FirebaseService, private dS: DataService){

    // fS.pushDataToFB();
    // this.dS.pureData();
  }

  callPushData(){
    setTimeout(()=>{this.clicked = true},500)
    this.DB_update = this.fS.pushDataToFB();
  }

}
