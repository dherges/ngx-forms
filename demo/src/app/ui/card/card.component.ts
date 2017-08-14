import { Component, Input, Output, EventEmitter } from '@angular/core'

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
  @Input() icon: string
  @Input() includeCopier: boolean = false
  private _title: string

  get title() {
    return this._title
  }

  @Input() set title(title) {
    switch (title.toLowerCase()) {
      case 'code':
        this._title = title
        this.includeCopier = true
        break
      case 'template':
        this._title = title
        this.includeCopier = true
        break
      case 'style':
        this._title = title
        break
      case 'buttons':
        this._title = title
        break
      case 'link args':
        this._title = title
        break
      case 'options':
        this._title = title
        break
      default:
        this._title = title
    }
  }

  @Output() action = new EventEmitter()

}
