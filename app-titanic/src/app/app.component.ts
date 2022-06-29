import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-titanic';

  constructor(private fS: FirebaseService, private dS: DataService){

    // fS.pushDataToFB();
    // this.dS.pureData();
  }

  callPushData(){
    this.fS.pushDataToFB();
  }

}
