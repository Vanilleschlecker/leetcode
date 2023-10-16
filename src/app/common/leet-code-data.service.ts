import {inject, Injectable} from '@angular/core'
import {LeetCode} from './leetCode'
import {HttpClient} from '@angular/common/http'
import {Problem} from './problem'

@Injectable({
  providedIn: 'root'
})
export class LeetCodeDataService {
  protected readonly jsonUrl = '../../assets/leetcode.json'
  private httpClient = inject(HttpClient)

  leetCodeData?: LeetCode

  constructor() {
    this.httpClient.get<LeetCode>(this.jsonUrl).subscribe((data) => {
      this.leetCodeData = data
    })
  }

  filterItemsOfType(type: string) {
    return this.leetCodeData?.problems.filter((problem) => problem.type == type) ?? []
  }

  getProblem(id: string): Problem | undefined {
    let ret: Problem | undefined = undefined
    this.leetCodeData?.problems.forEach((problem) => {
      if (problem.id == id) {
        ret = problem
      }
    })
    return ret
  }
}
