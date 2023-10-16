import {inject, Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {routePath} from './route-path'

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {
  private router = inject(Router)

  goToProblem(id: string) {
    this.router.navigate([routePath.PROBLEM, id])
  }
}
