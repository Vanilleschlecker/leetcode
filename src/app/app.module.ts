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
import { RansomNoteComponent } from './interview-questions/ransom-note/ransom-note.component';

import {
  HighlightOptions,
  HIGHLIGHT_OPTIONS, Highlight,
} from 'ngx-highlightjs';
import { CodeBlockComponent } from './common/code-block/code-block.component';

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
    RomanToIntegerComponent,
    RansomNoteComponent,
    CodeBlockComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    RouterOutlet,
    MatGridListModule,
    MatIconModule,
    Highlight
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        themePath: 'node_modules/highlight.js/styles/github.css',
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript')
        },
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
