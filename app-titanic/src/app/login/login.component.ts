import { Component, OnInit } from '@angular/core';
// import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title: string = "Titanic connection";

  constructor() {
    // fS.getTrainData();

   }

  ngOnInit(): void {
  }

}
