import {Component, inject} from '@angular/core';
import {NavigationServiceService} from "../common/navigation-service.service";
import {dailyQuestionsPath} from "./daily-questions-path";

@Component({
  selector: 'app-daily-questions',
  templateUrl: './daily-questions.component.html',
  styleUrls: ['./daily-questions.component.scss']
})
export class DailyQuestionsComponent {
  navigationService = inject(NavigationServiceService)
  protected readonly dailyQuestionsPath = dailyQuestionsPath
}
