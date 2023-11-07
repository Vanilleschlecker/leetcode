import {Component} from '@angular/core'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  constructor() {
    this.eliminateMaximum([4,2,8], [2,1,4])
  }

  eliminateMaximum(dist: number[], speed: number[]): number {
    let count = 0
    let ratio: number[] = []
    dist.forEach((distance, i) => {
      ratio.push(distance/speed[i])
    })

    ratio.sort((a, b) => a - b)

    while (count < ratio.length) {
      if (ratio[count] <= count) {
        break
      }
      count++
    }
    return count
  }
}
