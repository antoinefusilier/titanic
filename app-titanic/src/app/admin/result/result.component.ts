import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { docsGetted, survived, not_survived } from 'src/app/services/firebase.service';
import { GoogleChartsModule, ChartType } from 'angular-google-charts';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
// @ViewChild('monElementHTML') monElement: ElementRef;
export class ResultComponent implements OnInit {

  passengers: Array<any> = [];
  // https://github.com/FERNman/angular-google-charts
  // sur: number = survived.length;
  // Default value debugging into firebase service constante of survived and not_survived
  // Can't refresh HTML before variables :/

  // To it input/output or firebase function
  sur: number = 1;
  not_sur: number = 3;


  chart = {
    title: "Result",
    type: ChartType.PieChart,
    data: [['On suvécus', this.sur], ['Non pas survécus', this.not_sur]],
    columnsNames: ["Survived", "Not survived"],
    options: {
      colors: ['#e0440e', '#e6693e', '#ec8f6e'],
      is3D: true
    }
  }

  // [title] = "chart.title"[type] = "chart.type"[data] = "chart.data"[columns] = "chart.columnNames"
  // [options] = "chart.options"
  constructor(private router: Router,
    private renderer: Renderer2) {

    console.log("result: this.passengers: ",this.passengers);
    console.log('constructor result not s:',not_survived);
   }

  ngOnInit(): void {
    this.passengers = [];
    this.passengers = docsGetted;
    console.log('Pushing to passengers : (docsGetted)',docsGetted);

    this.loading();
    this.sur = survived.length;
    this.not_sur = not_survived.length;
    console.log('survivant apres init ',this.sur);
    console.log('non survivant apres init',this.not_sur);
    console.log('non survivant apres init', survived.length);
    console.log('non survivant apres init', not_survived.length);





  }
  async loading(){
    this.sur = survived.length;
    this.not_sur = not_survived.length;
  }


  backAnalyze(){

    this.router.navigate(['/admin/analyzes']);
    console.log("Going back to analyze !");

  }

}
