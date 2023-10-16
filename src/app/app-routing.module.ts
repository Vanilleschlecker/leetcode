import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {routePath} from './common/route-path'
import {ProblemComponent} from './problem/problem.component'


const routes: Routes = [
  {
    path: routePath.HOME,
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: routePath.PROBLEM + '/:id',
    component: ProblemComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
