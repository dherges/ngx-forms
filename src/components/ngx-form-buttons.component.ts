import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ngx-form-buttons',
  template: `
    <button
        *ngFor="let button of buttons"
        class="{{button.classNames}} {{classNames}}"
        (click)="click(button.click.type, button.click.payload)"
        [type]="button.type || 'button'">
      {{ button.label || 'Submit'}}
    </button>
  `,
})
export class NgxFormButtonsComponent {
  @Input() buttons = []
  @Input() item = {}
  @Input() classNames= 'btn btn-default'
  @Output() action = new EventEmitter()
  click(type, payload) {
    payload = payload || this.item
    this.action.emit({ type, payload })
  }
}
