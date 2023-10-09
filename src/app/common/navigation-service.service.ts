import {inject, Injectable} from '@angular/core';
import {interviewQuestionPath} from "../interview-questions/interview-question-path";
import {Router} from "@angular/router";
import {routePath} from "./route-path";

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {
  private router = inject(Router)
  protected readonly routePath = routePath;

  navigateTo(route: routePath) {
    this.router.navigate([route])
  }

  goToInterviewQuestion(url: interviewQuestionPath) {
    this.router.navigate([
      routePath.INTERVIEW_QUESTIONS,
      url
    ])
  }
}
