import {inject, Injectable} from '@angular/core';
import {interviewQuestionsPath} from "../interview-questions/interview-questions-path";
import {Router} from "@angular/router";
import {routePath} from "./route-path";
import {dailyQuestionsPath} from "../daily-questions/daily-questions-path";

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {
  private router = inject(Router)
  protected readonly routePath = routePath;

  navigateTo(route: routePath) {
    this.router.navigate([route])
  }

  goToInterviewQuestion(url: interviewQuestionsPath) {
    this.router.navigate([
      routePath.INTERVIEW_QUESTIONS,
      url
    ])
  }

  goToDailyQuestion(url: dailyQuestionsPath) {
    this.router.navigate([
      routePath.DAILY_QUESTIONS,
      url
    ])
  }
}
