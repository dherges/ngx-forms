import { Component } from '@angular/core'
import { NgxFormConfig } from '@ngx-plus/ngx-forms'

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
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

  config: NgxFormConfig = {
    title: 'Ngx-Forms',
    icon: 'fa fa-fw fa-tasks',
    fields: {
      input: 'input',
      password: 'password',
      email: 'email',
      date: 'date',
      textarea: 'textarea',
      wysiwyg: 'wysiwyg',
      select: {
        type: 'select',
        options: [
          { label: 1, value: 1 },
          { label: 2, value: 2 },
          { label: 3, value: 3 },
        ],
      },
    },
    buttons: [
      {
        label: 'Save',
        type: 'submit',
        classNames: 'btn-primary',
        click: { type: 'Submit' },
      },
      {
        label: 'Cancel',
        type: 'button',
        classNames: 'btn-secondary',
        click: { type: 'Cancel' },
      },
    ],
  }

  configString = `  formConfig = {
  title: 'Ngx-Forms',
  icon: 'fa fa-tasks',
  fields: {
    input: 'input',
    password: 'password',
    email: 'email',
    date: 'date',
    textarea: 'textarea',
    wysiwyg: 'wysiwyg',
    select: {
      type: 'select',
      options: [
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
      ],
    },
  },
  buttons: [{
    label: 'Save',
    type: 'submit',
    classNames: 'btn-primary',
    click: { type: 'submit' },
  }, {
    label: 'Cancel',
    type: 'button',
    classNames: 'btn-secondary',
    click: { type: 'cancel' },
  } ],
}`

  templateString = `<ngx-form [config]="formConfig"
          [item]="item"
          (action)="handleAction($event)">
</ngx-form>`

  constructor() { }

  handleAction(event) {
    switch (event.type) {
      case 'Submit':
      case 'Cancel': {
        return this.result = event
      }
      default: {
        return console.log('$event', event)
      }
    }
  }
}
