import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InterviewQuestionsComponent} from "./interview-questions/interview-questions.component";
import {routePath} from "./common/route-path";
import {LengthOfLastWordComponent} from "./interview-questions/length-of-last-word/length-of-last-word.component";
import {interviewQuestionPath} from "./interview-questions/interview-question-path";
import {
  LongestCommonPrefixComponent
} from "./interview-questions/longest-common-prefix/longest-common-prefix.component";
import {
  BestTimeToBuyAndSellStocksComponent
} from "./interview-questions/best-time-to-buy-and-sell-stocks/best-time-to-buy-and-sell-stocks.component";


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
        path: interviewQuestionPath.LENGTH_OF_LAST_WORD_58
      },
      {
        component: LongestCommonPrefixComponent,
        path: interviewQuestionPath.LONGEST_COMMON_PREFIX_14
      },
      {
        component: BestTimeToBuyAndSellStocksComponent,
        path: interviewQuestionPath.BEST_TIME_TO_BUY_AND_SELL_STOCKS_121
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
