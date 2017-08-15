import { Component } from '@angular/core'
import { NgxFormConfig } from '@ngx-plus/ngx-forms'

@Component({
  selector: 'usage',
  templateUrl: './usage.component.html',
})
export class UsageComponent {
  steps = [
    {
      title: 'Import the <b>NgxFormConfig</b> interface',
      code: {
        lang: 'ts',
        code: `import { NgxFormConfig } from '@ngx-plus/ngx-forms'`,
      },
    },
    {
      title: `Define the <b>Form Configuration</b>`,
      code: {
        lang: 'ts',
        code: `public formConfig: NgxFormConfig = {
  title: 'My Form',
  fields: {
    name: 'input',
  },
  buttons: [
    { label: 'Save', type: 'submit', classNames: 'btn-primary', click: { type: 'submit' }},
  ],
}`,
      },
    },
    {
      title: 'Create a method to handle <b>Form Actions</b>',
      description:
      'This method will be triggered by the form actions (button click, etc.)',
      code: {
        lang: 'ts',
        code: `public handleAction($event) {
  console.log('$event', $event)
}`,
      },
    },
    {
      title: 'Create a variable to store the <b>Form Data</b>',
      code: {
        lang: 'ts',
        code: `public item: any = {}`,
      },
    },
    {
      title: 'Create an instance of <b>ngx-form</b> and pass in the variables',
      code: {
        lang: 'html',
        code: `<ngx-form [config]="formConfig"
  [item]="item"
  (action)="handleAction($event)">
</ngx-form>`,
      },
    },
  ]

  item: any = {}

  formConfig: NgxFormConfig = {
    title: 'My Form',
    fields: {
      name: 'input',
    },
    buttons: [
      { label: 'Save', type: 'submit', classNames: 'btn-primary', click: { type: 'submit' }},
    ],
  }

  public handleAction(event) {
    return console.log('$event', event)
  }
}
