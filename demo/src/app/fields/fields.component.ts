import {Component, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core'
import { NgxFormsService } from '../../../../src/services/ngx-forms.service'

@Component({
  selector: 'fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldsComponent {

  constructor(private forms: NgxFormsService) { }

  // TODO: figure out why code snippets don't display on page load

  item = {}

  fields = [
    {
      name: 'input',
      code: {
        template: `<ngx-form-fields [fields]="field.formConfig.fields"></ngx-form-fields>`,
        code: `formConfig: {
  fields: [
    this.forms.input('inputField', {
      label: 'My Input',
      placeholder: 'My Input',
    }),
  ]
}`    },
      formConfig: {
        fields: [
          this.forms.input('inputField', {
            label: 'My Input',
            placeholder: 'My Input',
          }),
        ]
      }
    },
    {
      name: 'email',
      code: {
        template: `<ngx-form-fields [fields]="field.formConfig.fields"></ngx-form-fields>`,
        code: `formConfig: {
  fields: [
    this.forms.email('emailField', {
      label: 'My Email',
      placeholder: 'My Email',
    }),
  ]
}`    },
      formConfig: {
        fields: [
          this.forms.email('emailField', {
            label: 'My Email',
            placeholder: 'My Email',
          }),
        ]
      }
    },
    {
      name: 'password',
      code: {
        template: `<ngx-form-fields [fields]="field.formConfig.fields"></ngx-form-fields>`,
        code: `formConfig: {
  fields: [
    this.forms.password('passwordField', {
      label: 'My Password',
      placeholder: 'My Password',
    }),
  ]
}`    },
      formConfig: {
        fields: [
          this.forms.password('passwordField', {
            label: 'My Password',
            placeholder: 'My Password',
          }),
        ]
      }
    },
    {
      name: 'date',
      code: {
        template: `<ngx-form-fields [fields]="field.formConfig.fields"></ngx-form-fields>`,
        code: `formConfig: {
  fields: [
    this.forms.date('dateField', {
      label: 'My Date',
    }),
  ]
}`    },
      formConfig: {
        fields: [
          this.forms.date('dateField', {
            label: 'My Date',
          }),
        ]
      }
    },
    {
      name: 'textarea',
      code: {
        template: `<ngx-form-fields [fields]="field.formConfig.fields"></ngx-form-fields>`,
        code: `formConfig: {
  fields: [
    this.forms.textarea('textareaField', {
      label: 'My Textarea',
      placeholder: 'My Textarea',
    }),
  ]
}`    },
      formConfig: {
        fields: [
          this.forms.textarea('textareaField', {
            label: 'My Textarea',
            placeholder: 'My Textarea',
          }),
        ]
      }
    },
    {
      name: 'select',
      code: {
        template: `<ngx-form-fields [fields]="field.formConfig.fields"></ngx-form-fields>`,
        code: `formConfig: {
  fields: [
    this.forms.wysiwyg('wysiwygField', {
      label: 'My Wysiwyg',
      placeholder: 'My Wysiwyg',
    }),
  ]
}`    },
      formConfig: {
        fields: [
          this.forms.wysiwyg('wysiwygField', {
            label: 'My Wysiwyg',
            placeholder: 'My Wysiwyg',
          }),
        ]
      }
    },
    {
      name: 'select',
      code: {
        template: `<ngx-form-fields [fields]="field.formConfig.fields"></ngx-form-fields>`,
        code: `formConfig: {
  fields: [
    this.forms.select('selectField', {
      label: 'My Select',
      options: [
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
        { label: 4, value: 4 },
        { label: 5, value: 5 },
      ]
    }),
  ]
}`    },
      formConfig: {
        fields: [
          this.forms.select('selectField', {
            label: 'My Select',
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
    },
  ]

}
