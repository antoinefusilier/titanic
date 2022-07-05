import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin/admin.module';
// import { MarkdownModule } from 'ngx-markdown';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { SecurityContext } from '@angular/core';

// MarkdownModule.forRoot({
//   sanitize: SecurityContext.NONE
// })

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
