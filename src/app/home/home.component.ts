import {Component, inject} from '@angular/core'
import {NavigationServiceService} from '../common/navigation-service.service'
import {LeetCodeDataService} from '../common/leet-code-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  navigationService = inject(NavigationServiceService)
  leetCodeDataService = inject(LeetCodeDataService)
}
