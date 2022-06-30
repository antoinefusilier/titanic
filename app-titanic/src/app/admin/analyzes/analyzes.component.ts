import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
import { Analyze } from 'src/app/analyze';
import { FirebaseService, docsGetted, docsId } from 'src/app/services/firebase.service';

// Issues :
//  Of exportAs child-dir directive
// - https://angular.io/api/core/Directive#exportAs
// - - https://github.com/angular/angular-cli/issues/2762
// Other Ressources:
// https://angular.io/api/forms/NgModel
// https://www.learn-angular.fr/le-data-binding-angular/

@Component({
  selector: 'app-analyzes',
  templateUrl: './analyzes.component.html',
  styleUrls: ['./analyzes.component.scss'],
})
export class AnalyzesComponent implements OnInit {
  // Firebase Query Equation Variable to request
  fem_eq: any;
  male_eq: any;
  P1_eq: any;
  P2_eq: any;
  P3_eq: any;


  analyzeModel: Analyze = new Analyze({ female: true, male: true }, '', '', { c1: true, c2:true ,c3: true })
  // classes: any = ()
  constructor(private fS: FirebaseService) {
    // this.fS.getDocsId(" female", " 10", " 40", " 1");
    console.log(docsId);
    console.log(docsGetted);
  }

  ngOnInit(): void {
    this.initEq()
  }
  request: any = {
    f_true: '==',
    f_false: '!=',
    m_true: '!=',
    m_false: '!=',

    // min_age: " "+this.analyzeModel.min_age,
    // max_age: " "+this.analyzeModel.max_age,

    c_true: "==",
    c_false: "!=",

  }
  onSubmit(form: NgForm){
    this.initEq()
    this.fS.getDocsId(
      this.fem_eq,
      this.male_eq,
      " " + this.analyzeModel.min_age,
      " " + this.analyzeModel.max_age,
      this.P1_eq,
      this.P2_eq,
      this.P3_eq
    )
  }

  initEq(){
    // SEX EQUATION INIT
    // Female
    if (this.analyzeModel.Sex.female === true) {
      this.fem_eq = this.request.f_true
    }
    if (this.analyzeModel.Sex.female === false) {
      this.fem_eq = this.request.f_false;
    }
    // Male
    if (this.analyzeModel.Sex.female === true) {
      this.male_eq = this.request.m_true;
    }
    if (this.analyzeModel.Sex.female === false) {
      this.male_eq = this.request.m_false;
    }
    // CLASS EQUATION INIT
    // First Class
    if (this.analyzeModel.Class.c1 === true) {
      this.P1_eq = this.request.c_true;
    }
    if (this.analyzeModel.Class.c1 === false) {
      this.P1_eq = this.request.c_false;
    }
    // Second Class
    if (this.analyzeModel.Class.c2 === true) {
      this.P2_eq = this.request.c_true;
    }
    if (this.analyzeModel.Class.c2 === false) {
      this.P2_eq = this.request.c_false;
    }
    // Third Class
    if (this.analyzeModel.Class.c3 === true) {
      this.P3_eq = this.request.c_true;
    }
    if (this.analyzeModel.Class.c3 === false) {
      this.P3_eq = this.request.c_false;
    }
  }


}
