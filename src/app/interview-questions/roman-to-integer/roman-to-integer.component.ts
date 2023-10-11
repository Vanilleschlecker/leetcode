import { Component } from '@angular/core';

@Component({
  selector: 'app-roman-to-integer',
  templateUrl: './roman-to-integer.component.html',
  styleUrls: ['./roman-to-integer.component.scss']
})
export class RomanToIntegerComponent {
  romanToInt(s: string): number {
    let ret = 0

    let romanNumbers = new Map<string, number> ([
      ['I',1],
      ['V',5],
      ['X',10],
      ['L',50],
      ['C',100],
      ['D',500],
      ['M',1000],

      ['IV',4],
      ['IX',9],
      ['XL',40],
      ['XC',90],
      ['CD',400],
      ['CM',900],
    ])

    let sArray = s.split('')
    let i = 0

    while(i < sArray.length) {
      if(romanNumbers.get(sArray[i]+sArray[i+1])) {
        ret += romanNumbers.get(sArray[i]+sArray[i+1]) ?? 0
        i+=2
      } else {
        ret += romanNumbers.get(sArray[i]) ?? 0
        i++
      }
    }
    return ret
  }
}
