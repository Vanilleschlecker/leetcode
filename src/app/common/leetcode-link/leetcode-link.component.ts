import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-leetcode-link',
  templateUrl: './leetcode-link.component.html',
  styleUrls: ['./leetcode-link.component.scss']
})
export class LeetcodeLinkComponent {
  @Input() link?: string
  @Input() linkTitle = 'Link'
}
