import {Component, inject, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Problem} from '../common/problem'
import {LeetCodeDataService} from '../common/leet-code-data.service'

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private leetCodeDataService = inject(LeetCodeDataService)

  problem?: Problem

  ngOnInit() {
    let id = ''

    this.route.params.subscribe(params => {
      id = params['id']
    });

    this.problem = this.leetCodeDataService.getProblem(id)

  }
}
