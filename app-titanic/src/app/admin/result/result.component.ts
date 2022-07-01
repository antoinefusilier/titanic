import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { docsGetted } from 'src/app/services/firebase.service';
import { ChartType, ChartOptions } from '../../../../node_modules/chart.js';
// Angu 11 : Not fonctional but good ressource
// https://www.zentica-global.com/fr/zentica-blog/voir/tutoriel-angular-11-chart-js-avec-des-exemples-de-ng2-charts-6073abf9da42c

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  passengers: Array<any> = [];

  $scope.chartLabels = ['List A', 'List B', 'List C'];
  $scope.chart-data =[55, 69, 10];
  chart - click="onClickdisplay"
  $scope.onClickdisplay = function (points, evt) {
    console.log(points);
  };
  constructor(private router: Router) {
    this.passengers = docsGetted;
    console.log(this.passengers)

    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
  }

  backAnalyze(){

    this.router.navigate(['/admin/analyzes']);
    console.log("Going back to analyze !");

  }

}
