import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgxFormButton } from './ngx-form.interfaces'

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

  @Input() buttons: NgxFormButton[] = []
  @Input() item: any = {}
  @Input() classNames = 'btn btn-default'
  @Output() action: EventEmitter<any> = new EventEmitter()

  click(type, payload) {
    payload = payload || this.item
    this.action.emit({ type, payload: Object.assign({}, payload) })
  }

}
