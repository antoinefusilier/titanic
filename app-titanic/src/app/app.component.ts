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

  constructor(private fS: FirebaseService, dS: DataService){

    // fS.pushDataToFB();

  }

  callPushData(){
    this.fS.pushDataToFB();
  }

}
