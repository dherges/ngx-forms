import { Component } from '@angular/core'
import { NgxFormsService } from '@ngx-plus/ngx-forms'

@Component({
  selector: 'usage',
  templateUrl: './usage.component.html',
})
export class UsageComponent {
  steps = [
    {
      order: 1,
      title: `Inject <b>NgxFormsService</b>`,
      description: `The <b><code>NgxFormsService</code></b> can be used to generate the field definitions in the form config.`,
      code: {
        lang: 'ts',
        code: `constructor(private forms: NgxFormsService) { }`,
      },
    },
    {
      title: `Define the <b>Form Configuration</b>`,
      code: {
        lang: 'ts',
        code: `public formConfig = {
  title: 'My Form',
  buttons: [
    { label: 'Save', type: 'submit', classNames: 'btn-primary', click: { type: 'submit' }},
  ],
  fields: [
    this.forms.input('input', {
      label: 'Input',
      placeholder: 'Input',
    }),
  ]
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

  formConfig = {
    title: 'My Form',
    buttons: [
      {
        label: 'Save',
        type: 'submit',
        classNames: 'btn-primary',
        click: { type: 'submit' },
      },
      {
        label: 'Cancel',
        type: 'button',
        classNames: 'btn-secondary',
        click: { type: 'cancel' },
      },
    ],
    fields: [
      this.forms.input('input', {
        label: 'Input',
        placeholder: 'Input',
      }),
    ],
  }

  public handleAction(event) {
    return console.log('$event', event)
  }

  constructor(
    private forms: NgxFormsService,
  ) { }
}
