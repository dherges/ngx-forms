import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'ui-card',
  template: `
    <div class="ui-card">
      <div class="ui-card-header">
        <div class="ui-card-title">
          <i class="{{icon}}" aria-hidden="true"></i>
          {{title}}
        </div>
        <button *ngIf="includeCopier" class="btn btn-sm btn-secondary ml-auto" (click)="action.emit({ type: 'CopyCode' })">
          <i class="fa fa-fw fa-clone"></i>
        </button>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input() title: string
  @Input() icon: string
  @Input() includeCopier: boolean = false
  @Input() set cardTitle(title) {
    switch (title.toLowerCase()) {
      case 'code':
        this.title = title
        this.includeCopier = true
        break
      case 'template':
        this.title = title
        this.includeCopier = true
        break
      case 'style':
        this.title = title
        break
      case 'buttons':
        this.title = title
        break
      case 'link args':
        this.title = title
        break
      case 'options':
        this.title = title
        break
      default:
        this.title = title
    }
  }
  @Input() active = false
  @Output() action = new EventEmitter()

}
