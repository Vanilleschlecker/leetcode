import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatCardModule} from "@angular/material/card";
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { HomeComponent } from './home/home.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { LengthOfLastWordComponent } from './interview-questions/length-of-last-word/length-of-last-word.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import { LongestCommonPrefixComponent } from './interview-questions/longest-common-prefix/longest-common-prefix.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewQuestionsComponent,
    HomeComponent,
    LengthOfLastWordComponent,
    LongestCommonPrefixComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    RouterOutlet,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
