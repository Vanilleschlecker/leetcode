import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatCardModule} from "@angular/material/card";
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { HomeComponent } from './home/home.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { LengthOfLastWordComponent } from './interview-questions/length-of-last-word/length-of-last-word.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewQuestionsComponent,
    HomeComponent,
    LengthOfLastWordComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
