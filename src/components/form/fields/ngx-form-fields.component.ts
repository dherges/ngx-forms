import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'ngx-form-fields',
  templateUrl: './ngx-form.component.html',
  styleUrls: ['../../scss/styles.scss']
})
export class NgxFormComponent {
  form: FormGroup = new FormGroup({})
  @Input() config
  @Input() item
  @Output() action = new EventEmitter()
}
