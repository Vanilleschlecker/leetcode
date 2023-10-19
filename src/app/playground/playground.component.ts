import {Component} from '@angular/core'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  constructor() {
    this.backspaceCompare('ab#c', 'ad#c')
  }

  backspaceCompare(s: string, t: string): boolean {
    let sArray = s.split('')
    let tArray = t.split('')


    while(sArray.indexOf('#') > -1) {
      if (sArray.indexOf('#') > 0) {
        sArray.splice(sArray.indexOf('#') - 1, 1)
      }
      sArray.splice(sArray.indexOf('#'), 1)
    }

    while(tArray.indexOf('#') > -1) {
      if (tArray.indexOf('#') > 0) {
        tArray.splice(tArray.indexOf('#') - 1, 1)
      }
      tArray.splice(tArray.indexOf('#'), 1)
    }

    return sArray.join(',') === tArray.join(',')
  }
}
