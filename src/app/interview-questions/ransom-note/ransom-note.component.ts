import { Component } from '@angular/core';

@Component({
  selector: 'app-ransom-note',
  templateUrl: './ransom-note.component.html',
  styleUrls: ['./ransom-note.component.scss']
})
export class RansomNoteComponent {
  canConstruct(ransomNote: string, magazine: string): boolean {
    let magazineArr = magazine.split('')
    let ransomNoteArr = ransomNote.split('')

    let i = ransomNoteArr.length - 1

    if (magazineArr.length >= ransomNoteArr.length) {
      while(i >= 0) {
        if (magazineArr.findIndex((magazineChar) => {
          return magazineChar == ransomNoteArr[i]
        }) > -1) {
          magazineArr.splice(magazineArr.findIndex((magazineChar) => {
            return magazineChar == ransomNoteArr[i]
          }),1)
        } else {
          return false
        }
        i--
      }
    } else {
      return false
    }

    return true
  }
}
