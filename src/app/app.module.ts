import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
     imports: [
          BrowserModule,
          RouterModule.forRoot(routes),
          NgbModule
     ],
     providers: []
})
export class AppModule { }
