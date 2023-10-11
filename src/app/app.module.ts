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
import { BestTimeToBuyAndSellStocksComponent } from './interview-questions/best-time-to-buy-and-sell-stocks/best-time-to-buy-and-sell-stocks.component';
import { DailyQuestionsComponent } from './daily-questions/daily-questions.component';
import { MinimumOperationsToMakeArrayContiniousComponent } from './daily-questions/minimum-operations-to-make-array-continious/minimum-operations-to-make-array-continious.component';
import { RomanToIntegerComponent } from './interview-questions/roman-to-integer/roman-to-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewQuestionsComponent,
    HomeComponent,
    LengthOfLastWordComponent,
    LongestCommonPrefixComponent,
    BestTimeToBuyAndSellStocksComponent,
    DailyQuestionsComponent,
    MinimumOperationsToMakeArrayContiniousComponent,
    RomanToIntegerComponent
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
