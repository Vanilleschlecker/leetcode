import { Component } from '@angular/core';

@Component({
  selector: 'app-length-of-last-word',
  templateUrl: './length-of-last-word.component.html',
  styleUrls: ['./length-of-last-word.component.scss']
})
export class LengthOfLastWordComponent {
  lengthOfLastWord(s: string): number {
    let wordArray = s.split(' ')
    wordArray = wordArray.filter((element) => element !== ' ' && element !== '')
    return wordArray[wordArray.length -1].length
  }
}
