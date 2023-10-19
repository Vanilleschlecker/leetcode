import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import {MatCardModule} from '@angular/material/card'
import { HomeComponent } from './home/home.component'
import {RouterOutlet} from '@angular/router'
import {AppRoutingModule} from './app-routing.module'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatIconModule} from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http'
import {
  HighlightOptions,
  HIGHLIGHT_OPTIONS, Highlight,
} from 'ngx-highlightjs'
import { CodeBlockComponent } from './common/code-block/code-block.component'
import { ProblemComponent } from './problem/problem.component'
import { LeetcodeLinkComponent } from './common/leetcode-link/leetcode-link.component';
import { PlaygroundComponent } from './playground/playground.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CodeBlockComponent,
    ProblemComponent,
    LeetcodeLinkComponent,
    PlaygroundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    RouterOutlet,
    MatGridListModule,
    MatIconModule,
    Highlight,
    HttpClientModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript')
        },
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
