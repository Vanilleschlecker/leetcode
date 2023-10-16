import { Component } from '@angular/core';

@Component({
  selector: 'app-pascals-triangle',
  templateUrl: './pascals-triangle.component.html',
  styleUrls: ['./pascals-triangle.component.scss']
})
export class PascalsTriangleComponent {
  constructor() {
    this.getRow(4)
  }

  getRow(rowIndex: number): number[] {
    let retList: number[] = []
    let entry = 1;
    retList.push(entry);
    for(let i=1; i <= rowIndex; i++){
      entry=(entry*(rowIndex+1-i))/i;

      retList.push(entry);
    }

    return retList;
  }
}
