import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CopierService } from '../../services/copier.service'

@Component({
  selector: 'ui-card',
  template: `
    <div class="ui-card">
      <div class="ui-card-header">
        <div class="ui-card-title">
          <i class="{{icon}}" aria-hidden="true"></i>
          {{title}}
        </div>
        <button *ngIf="copy" class="btn btn-sm btn-secondary ml-auto" (click)="triggerCopy()">
          <i class="fa fa-fw fa-clone"></i>
        </button>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() copy: string = null
  @Input() icon: string
  @Input() title: string

  constructor(private copier: CopierService) {}

  triggerCopy() {
    this.copier.copyText(this.copy)
  }

}
