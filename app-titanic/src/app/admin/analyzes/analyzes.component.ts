import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Analyze } from 'src/app/analyze';
import { FirebaseService, docsGetted, docsId } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-analyzes',
  templateUrl: './analyzes.component.html',
  styleUrls: ['./analyzes.component.scss']
})
export class AnalyzesComponent implements OnInit {

  analyzeModel: Analyze = new Analyze([],[],[])

  constructor(private fS: FirebaseService) {
    // this.fS.collect('male', [30,40], [1] );
    this.fS.getDocsId(" female", " 10", " 40", " 1");
    // console.log(this.fS.getDocsById());
    console.log(docsId);

    console.log(docsGetted);

  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

  }

  analyzing(sex:string, ages:[min_age:number, max_age:number], classes: []){

  }



}
