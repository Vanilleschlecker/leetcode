import { Component } from '@angular/core';

@Component({
  selector: 'app-longest-common-prefix',
  templateUrl: './longest-common-prefix.component.html',
  styleUrls: ['./longest-common-prefix.component.scss']
})
export class LongestCommonPrefixComponent {
  longestCommonPrefix(strs: string[]): string {
    let prefix = ''
    let checkStringArray = strs[0].split('')
    let differenceFound = false
    let i = 0
    while(!differenceFound && i < checkStringArray.length) {
      strs.forEach((element) => {
        if(element.split('')[i] != checkStringArray[i]) {
          differenceFound = true
        }
      })
      if(differenceFound) {
        break
      } else {
        prefix += checkStringArray[i]
        i++
      }
    }
    return prefix
  }
}
