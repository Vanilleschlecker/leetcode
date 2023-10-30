import {Component} from '@angular/core'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  constructor() {
    this.sortByBits([1890,512,256,128,64,32,16,8,4,2,1])
  }

  sortByBits(arr: number[]): number[] {
    return arr.sort((num1, num2) => {
      let num1Bits = Number(num1).toString(2).match(new RegExp('1', 'g')) ?? []
      let num2Bits = Number(num2).toString(2).match(new RegExp('1', 'g')) ?? []

      if (num1Bits.length > num2Bits.length) {
        return 1
      } else if (num1Bits.length < num2Bits.length) {
        return -1
      } else {
        if (num1 > num2) {
          return 1
        } else if (num1 < num2) {
          return -1
        } else {
          return 0
        }
      }
    })
  }
}
