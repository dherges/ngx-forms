import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NgxFormsService } from '@ngx-plus/ngx-forms'

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent {

  item = {
    input: null,
    email: null,
    password: null,
    date: null,
    textarea: null,
    wysiwyg: null,
    select: null,
  }

  result = {}

  formConfig = {
    title: 'Ngx-Forms',
    icon: 'fa fa-tasks',
    buttons: [
      { label: 'Save', type: 'submit', classNames: 'btn-primary', click: { type: 'submit' } },
      { label: 'Cancel', type: 'button', classNames: 'btn-secondary', click: { type: 'cancel' } },
    ],
    fields: [
      this.forms.input('input', {
        label: 'Input',
        placeholder: 'Input',
      }),
      this.forms.email('email', {
        label: 'Email',
        placeholder: 'Email',
      }),
      this.forms.password('password', {
        label: 'Password',
        placeholder: 'Password',
      }),
      this.forms.date('date', {
        label: 'Date',
        placeholder: 'Date',
      }),
      this.forms.textarea('textarea', {
        label: 'Textarea',
        placeholder: 'Textarea',
      }),
      this.forms.wysiwyg('wysiwyg', {
        label: 'Wysiwyg',
        placeholder: 'Wysiwyg',
      }),
      this.forms.select('select', {
        label: 'Select',
        options: [
          { label: 1, value: 1 },
          { label: 2, value: 2 },
          { label: 3, value: 3 },
          { label: 4, value: 4 },
          { label: 5, value: 5 },
        ]
      }),
    ]
  }

  constructor(private forms: NgxFormsService) { }

  handleAction($event) {
    this.result = $event
  }

}
