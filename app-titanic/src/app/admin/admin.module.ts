import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzesComponent } from './analyzes/analyzes.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
// import { AdminDirective } from './admin.directive';



@NgModule({
  declarations: [
    AnalyzesComponent,
    ResultComponent,
    SearchComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  exports: [
    AnalyzesComponent,
    FormsModule
  ]
})
export class AdminModule { }
