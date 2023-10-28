import {Component} from '@angular/core'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  constructor() {
    this.longestPalindrome('babad')
  }

  longestPalindrome(s: string): string {
    let sArray = s.split('')
    let testChar = ''
    let longest: string[] = []
    let i = 0
    let j = 0

    while (i < sArray.length) {
      if(longest.length > sArray.length / 2) {
        break
      }
      j = i + 1
      testChar = sArray[i]
      while (j < sArray.length) {
        if (testChar[testChar.length - 1] == sArray[j]) {
          if(sArray.slice(i, j + 1).join('') == sArray.slice(i, j + 1).reverse().join('')) {
            if (sArray.slice(i, j + 1).length > longest.length) {
              longest = sArray.slice(i, j + 1)
            }
          }
        }
        j++
      }
      i++
    }

    if (longest.length > 0) {
      return longest.join('')
    } else {
      if (sArray.length == 0) {
        return ''
      } else {
        return sArray[0]
      }
    }
  }
}
