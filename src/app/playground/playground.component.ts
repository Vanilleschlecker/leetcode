import {Component} from '@angular/core'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  constructor() {
    this.isPowerOfFour(16)
  }

  isPowerOfFour(n: number): boolean {
    return (Math.log(n)/Math.log(4)) % 1 === 0
  }
}
