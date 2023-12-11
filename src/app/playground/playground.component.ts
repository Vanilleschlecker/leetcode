import {Component} from '@angular/core'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  constructor() {
    this.findSpecialInteger([1])
  }

  findSpecialInteger(arr: number[]): number {
    let arrLength = arr.length
    let indexDifference = 0
    let startIndex = 0
    let foundNumber = arr[startIndex]

    while (arrLength/4 >= indexDifference + 1) {
      indexDifference = arr.lastIndexOf(arr[startIndex]) - startIndex
      foundNumber = arr[startIndex]
      startIndex = arr.lastIndexOf(arr[startIndex]) + 1
    }

    return foundNumber
  }
}
