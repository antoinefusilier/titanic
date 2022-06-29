import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
// import { FirebaseService } from '../services/firebase.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title: string = "Titanic connection";
  modelUser: User = new User('', '');

  constructor(private aS: AuthService) {
    // fS.getTrainData();

   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.aS.signIn(this.modelUser.email, this.modelUser.password)
  }
}
