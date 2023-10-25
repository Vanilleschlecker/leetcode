import {Component} from '@angular/core'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  constructor() {
    this.kthGrammar(30, 434991989)
  }

  kthGrammar(n: number, k: number): number {
    return (n == 1) ? 0 : (n == 2) ? (k == 1) ? 0 : 1 : (this.kthGrammar(n-1 , (k % 2 == 0) ? k/2 : (k+1)/2) == 0) ? (k % 2 == 0) ? 1 : 0 : (k % 2 == 0) ? 0 : 1
  }
}
