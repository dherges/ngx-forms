import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NgxFormsService } from '@ngx-plus/ngx-forms'

@Component({
  selector: 'usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsageComponent {

  steps = [
    {
      title: `Inject <b>NgxFormsService</b>`,
      description: `The NgxFormsService service can be used to generate the field definitions in the form config.`,
      code: {
        lang: 'ts',
        code: `constructor(private forms: NgxFormsService) { }`,
      },
    },
    {
      title: `Define the form configuration`,
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
      title: 'Add method to handle form actions',
      description: 'This method is triggered by the form actions like a button click.',
      code: {
        lang: 'ts',
        code: `public handleAction($event) {
  console.log('$event', $event)
}`
      }
    },
    {
      title: 'Create a variable to store the form data',
      code: {
        lang: 'ts',
        code: `public item: any = {}`
      }
    },
    {
      title: 'Create an instance of <b>ngx-form</b> the form and pass in the variables',
      code: {
        lang: 'html',
        code: `<ngx-form
  [config]="formConfig"
  [item]="item"
  (action)="handleAction($event)">
</ngx-form>`
      }
    },
  ]

  item: any = {}

  formConfig = {
    title: 'ngx-forms Example Form',
    buttons: [
      { label: 'Save', type: 'submit', classNames: 'btn-primary', click: { type: 'submit' } },
      { label: 'Cancel', type: 'button', classNames: 'btn-secondary', click: { type: 'cancel' } },
    ],
    fields: [
      this.forms.input('input', {
        label: 'Input',
        placeholder: 'Input',
      }),
    ]
  }

  public handleAction($event) {
    console.log('$event', $event)
  }

  constructor(private forms: NgxFormsService) { }
}
