import {Component, inject} from '@angular/core';
import {NavigationServiceService} from "../common/navigation-service.service";
import {interviewQuestionPath} from "./interview-question-path";

@Component({
  selector: 'app-interview-questions',
  templateUrl: './interview-questions.component.html',
  styleUrls: ['./interview-questions.component.scss']
})
export class InterviewQuestionsComponent {
  navigationService = inject(NavigationServiceService)
  protected readonly interviewQuestionPath = interviewQuestionPath;
}
