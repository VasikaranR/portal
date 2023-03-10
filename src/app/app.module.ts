import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './users/error/error.component';
import { DocsComponent } from './portal/docs/docs.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    DocsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
