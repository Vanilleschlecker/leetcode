import {Component, inject} from '@angular/core';
import {NavigationServiceService} from '../common/navigation-service.service';
import {routePath} from '../common/route-path';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected readonly routePath = routePath;
  navigationService = inject(NavigationServiceService)
}
