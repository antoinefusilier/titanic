import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyzesComponent } from './admin/analyzes/analyzes.component';
import { MenuComponent } from './admin/menu/menu.component';
import { ResultComponent } from './admin/result/result.component';
import { SearchComponent } from './admin/search/search.component';
import { LoginComponent } from './login/login.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'admin/analyzes',
    component: AnalyzesComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'admin/search',
    component: SearchComponent,
    canActivate: [UserGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
