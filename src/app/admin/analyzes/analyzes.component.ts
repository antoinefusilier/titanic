import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { ActivatedRoute, Router } from '@angular/router';
import { Analyze } from '../../analyze';
import { FirebaseService, docsGetted, docsId, docsConfirm } from '../../services/firebase.service';

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



  request: any = {
    sex: 'all',
    min_age: '',
    max_age: '',
    Pclass: '',
    searchT: ''
  }

  analyzeModel: Analyze = new Analyze({ female: true, male: true }, '10', '', { c1: true, c2:true ,c3: true })
  // classes: any = ()
  constructor(private fS: FirebaseService, private router: Router) {
    // this.fS.getDocsId(" female", " 10", " 40", " 1");
    console.log(docsId);
    console.log(docsGetted);
  }



  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    this.check()
    console.log('SUBM Sex',this.request.sex);
    console.log('SUBM Class', this.request.Pclass);
    console.log('SUBM search', this.request.searchT);

    this.fS.getDocsId(
      this.request.sex,
      this.request.min_age,
      this.request.max_age,
      this.request.Pclass,
      this.request.searchT
    )
    console.log("request before routing",this.request);
    this.searchResult(form);
  }

  async searchResult(form: NgForm): Promise<any>{
    console.log("routing promise waiting");

    docsConfirm
    .then(()=>{
      console.log("routing");

      this.router.navigate(['/admin/search']);
    })
    .catch(()=>{
      console.log("Promesse de resultat non tenue")
      form.reset();
    })
  }


  check(){

    this.request.min_age = parseInt(" "+this.analyzeModel.min_age);
    this.request.max_age = parseInt(" "+this.analyzeModel.max_age);

    if (this.analyzeModel.Sex.female === true
      && this.analyzeModel.Sex.male !== true){
        this.request.sex = " female";
      }
    if (this.analyzeModel.Sex.female !== true
      && this.analyzeModel.Sex.male === true) {
      this.request.sex = " male";
    }
// To finish
    if(this.analyzeModel.Class.c1 === true
      && this.analyzeModel.Class.c2 !== true
      && this.analyzeModel.Class.c3 !== true){
      this.request.Pclass = " 1";
    }
    if (this.analyzeModel.Class.c2 === true
      && this.analyzeModel.Class.c1 !== true
      && this.analyzeModel.Class.c3 !== true) {
      this.request.Pclass = " 2";
    }
    if (this.analyzeModel.Class.c3 === true
      && this.analyzeModel.Class.c2 !== true
      && this.analyzeModel.Class.c1 !== true) {
      this.request.Pclass = " 3";
    }


    if (((this.analyzeModel.Sex.female === true
      && this.analyzeModel.Sex.male !== true)
      || (this.analyzeModel.Sex.female !== true
        && this.analyzeModel.Sex.male === true)
      )

      && (this.analyzeModel.Class.c1 === true
      || this.analyzeModel.Class.c2 === true
      || this.analyzeModel.Class.c3 === true
      )
      ){
      this.request.searchT = 'SAC';
    }

    if ((this.analyzeModel.Sex.female === true
      && this.analyzeModel.Sex.male === true)

      && (this.analyzeModel.Class.c1 === true
        || this.analyzeModel.Class.c2 === true
        || this.analyzeModel.Class.c3 === true
      )
    ) {
      this.request.searchT = 'AC';
    }
    if ((this.analyzeModel.Sex.female === true
      && this.analyzeModel.Sex.male !== true)

      && (this.analyzeModel.Class.c1 === true
        && this.analyzeModel.Class.c2 === true
        && this.analyzeModel.Class.c3 === true
      )
    ) {
      this.request.searchT = 'SA';
    }
    if ((this.analyzeModel.Sex.female === true
      && this.analyzeModel.Sex.male === true)

      && (this.analyzeModel.Class.c1 === true
        && this.analyzeModel.Class.c2 === true
        && this.analyzeModel.Class.c3 === true
      )
    ) {
      this.request.searchT = 'A';
    }
  }

}
// TEST But not posible to assign an a same field multiple sigle equations

// Firebase Query Equation Variable to request
// fem_eq: any;
// male_eq: any;
// P1_eq: any;
// P2_eq: any;
// P3_eq: any;

// this.initEq()
// this.fS.getDocsId(
//   this.fem_eq,
//   this.male_eq,
//   " " + this.analyzeModel.min_age,
//   " " + this.analyzeModel.max_age,
//   this.P1_eq,
//   this.P2_eq,
//   this.P3_eq
// )

// request: any = {
//   f_true: '==',
//   f_false: '!=',
//   m_true: '!=',
//   m_false: '!=',

//   // min_age: " "+this.analyzeModel.min_age,
//   // max_age: " "+this.analyzeModel.max_age,

//   c_true: "==",
//   c_false: "!=",

// }
// initEq(){
//   // SEX EQUATION INIT
//   // Female
//   if (this.analyzeModel.Sex.female === true) {
//     this.fem_eq = this.request.f_true
//   }
//   if (this.analyzeModel.Sex.female === false) {
//     this.fem_eq = this.request.f_false;
//   }
//   // Male
//   if (this.analyzeModel.Sex.female === true) {
//     this.male_eq = this.request.m_true;
//   }
//   if (this.analyzeModel.Sex.female === false) {
//     this.male_eq = this.request.m_false;
//   }
//   // CLASS EQUATION INIT
//   // First Class
//   if (this.analyzeModel.Class.c1 === true) {
//     this.P1_eq = this.request.c_true;
//   }
//   if (this.analyzeModel.Class.c1 === false) {
//     this.P1_eq = this.request.c_false;
//   }
//   // Second Class
//   if (this.analyzeModel.Class.c2 === true) {
//     this.P2_eq = this.request.c_true;
//   }
//   if (this.analyzeModel.Class.c2 === false) {
//     this.P2_eq = this.request.c_false;
//   }
//   // Third Class
//   if (this.analyzeModel.Class.c3 === true) {
//     this.P3_eq = this.request.c_true;
//   }
//   if (this.analyzeModel.Class.c3 === false) {
//     this.P3_eq = this.request.c_false;
//   }
// }
