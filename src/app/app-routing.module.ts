import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InterviewQuestionsComponent} from "./interview-questions/interview-questions.component";
import {routePath} from "./common/route-path";
import {LengthOfLastWordComponent} from "./interview-questions/length-of-last-word/length-of-last-word.component";
import {interviewQuestionsPath} from "./interview-questions/interview-questions-path";
import {
  LongestCommonPrefixComponent
} from "./interview-questions/longest-common-prefix/longest-common-prefix.component";
import {
  BestTimeToBuyAndSellStocksComponent
} from "./interview-questions/best-time-to-buy-and-sell-stocks/best-time-to-buy-and-sell-stocks.component";
import {DailyQuestionsComponent} from "./daily-questions/daily-questions.component";
import {
  MinimumOperationsToMakeArrayContiniousComponent
} from "./daily-questions/minimum-operations-to-make-array-continious/minimum-operations-to-make-array-continious.component";
import {dailyQuestionsPath} from "./daily-questions/daily-questions-path";
import {RomanToIntegerComponent} from "./interview-questions/roman-to-integer/roman-to-integer.component";
import {RansomNoteComponent} from "./interview-questions/ransom-note/ransom-note.component";


const routes: Routes = [
  {
    path: routePath.HOME,
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: routePath.INTERVIEW_QUESTIONS,
    component: InterviewQuestionsComponent,
    children: [
      {
        component: LengthOfLastWordComponent,
        path: interviewQuestionsPath.LENGTH_OF_LAST_WORD_58
      },
      {
        component: LongestCommonPrefixComponent,
        path: interviewQuestionsPath.LONGEST_COMMON_PREFIX_14
      },
      {
        component: BestTimeToBuyAndSellStocksComponent,
        path: interviewQuestionsPath.BEST_TIME_TO_BUY_AND_SELL_STOCKS_121
      },
      {
        component: RomanToIntegerComponent,
        path: interviewQuestionsPath.ROMAN_TO_INTEGER_13
      },
      {
        component: RansomNoteComponent,
        path: interviewQuestionsPath.RANSOM_NOTE_383
      }
    ]
  },
  {
    path: routePath.DAILY_QUESTIONS,
    component: DailyQuestionsComponent,
    children: [
      {
        component: MinimumOperationsToMakeArrayContiniousComponent,
        path: dailyQuestionsPath.MINIMUM_OPERATIONS_TO_MAKE_ARRAY_CONTINUOUS_2009
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
