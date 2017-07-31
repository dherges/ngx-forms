import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'ngx-form',
  template: `
    <form class="card" role="form" novalidate [formGroup]="form">
      <ngx-form-header class="card-header"
                       [icon]="config.icon" [title]="config.title" [item]="item">
      </ngx-form-header>
      <ngx-form-fields class="card-block"
                       [fields]="config.fields" [form]="form" [item]="item" (action)="handleAction($event)">
      </ngx-form-fields>
      <ngx-form-buttons class="card-footer"
                        [buttons]="config.buttons" [item]="item" (action)="handleAction($event)">
      </ngx-form-buttons>
    </form>
  `,
})
export class NgxFormComponent {
  @Input() form: FormGroup = new FormGroup({})
  @Input() config = {
    fields: [],
    buttons: [],
  }
  @Input() item
  @Output() action = new EventEmitter()

  handleAction($event) {
    this.action.emit($event)
  }
}
