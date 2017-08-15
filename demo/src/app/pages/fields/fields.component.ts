import { Component } from '@angular/core'
import { NgxFormConfig } from '@ngx-plus/ngx-forms'

@Component({
  selector: 'fields',
  template: `
    <section>
      <h2>Field types</h2>
      <p class="lead">
        The <code>fields</code> object in your formConfig is used to define the fields of the form.
        The key is the name of the field and it's value is the fields definition. 
        To render a default field you can use the string representation as a value.
        If you want to add in options you can use a configuration object.
      </p>
      <ui-card icon="fa fa-code"
               title="Code"
               [copy]="exampleConfig">
        <highlight lang="ts"
                   [code]="exampleConfig">
        </highlight>
      </ui-card>
    </section>
    <field-types [fields]="fields"></field-types>
  `,
})
export class FieldsComponent {
  exampleConfig = `formConfig: {
  // buttons: [], icon: '', title: ''
  fields: {
    // Field with options
    name: {
      type: 'input',
      placeholder: 'Enter your name',
    },
    // Default field
    email: 'email',
  },
}`

  item = {}

  fields = [
    {
      name: 'input',
      code: {
        code: `fields: {
  inputDefault: 'input',
  inputOptions: {
    type: 'input',
    label: 'My Input Options',
    placeholder: 'My Input Options',
  },
}`,
      },
      formConfig: {
        fields: {
          inputDefault: 'input',
          inputOptions: {
            type: 'input',
            label: 'My Input Options',
            placeholder: 'My Input Options',
          },
        },
      },
    },
    {
      name: 'email',
      code: {
        code: `fields: {
  emailDefault: 'email',
  emailOptions: {
    type: 'email',
    label: 'My Email Options',
    placeholder: 'My Email Options',
  },
}`,
      },
      formConfig: {
        fields: {
          emailDefault: 'email',
          emailOptions: {
            type: 'email',
            label: 'My Email Options',
            placeholder: 'My Email Options',
          },
        },
      },
    },
    {
      name: 'password',
      code: {
        code: `fields: {
  passwordDefault: 'password',
  passwordOptions: {
    type: 'password',
    label: 'My Password Options',
    placeholder: 'My Password Options',
  }
}`,
      },
      formConfig: {
        fields: {
          passwordDefault: 'password',
          passwordOptions: {
            type: 'password',
            label: 'My Password Options',
            placeholder: 'My Password Options',
          }
        },
      },
    },
    {
      name: 'date',
      code: {
        code: `fields: {
  dateDefault: 'date',
  dateOptions: {
    type: 'date',
    label: 'My Date Options',
  },
}`,
      },
      formConfig: {
        fields: {
          dateDefault: 'date',
          dateOptions: {
            type: 'date',
            label: 'My Date Options',
          },
        }
      },
    },
    {
      name: 'textarea',
      code: {
        code: `fields: {
  textareaDefault: 'textarea',
  textareaOptions: {
    type: 'textarea',
    label: 'My Textarea Options',
    placeholder: 'My Textarea Options',
  },
}`,
      },
      formConfig: {
        fields: {
          textareaDefault: 'textarea',
          textareaOptions: {
            type: 'textarea',
            label: 'My Textarea Options',
            placeholder: 'My Textarea Options',
          },
        },
      },
    },
    {
      name: 'wysiwyg',
      code: {
        code: `fields: {
  wysiwygDefault: 'wysiwyg',
  wysiwygOptions: {
    type: 'wysiwyg',
    label: 'My Wysiwyg',
    placeholder: 'My Wysiwyg',
  },
`,
      },
      formConfig: {
        fields: {
          wysiwygDefault: 'wysiwyg',
          wysiwygOptions: {
            type: 'wysiwyg',
            label: 'My Wysiwyg',
            placeholder: 'My Wysiwyg',
          },
        },
      },
    },
    {
      name: 'select',
      code: {
        code: `fields: {
  selectDefault: 'select',
  selectOptions: {
    type: 'select',
    label: 'My Select',
    options: [
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 3, value: 3 },
    ],
  },
}`,
      },
      formConfig: {
        fields: {
          selectDefault: 'select',
          selectOptions: {
            type: 'select',
            label: 'My Select',
            options: [
              { label: 1, value: 1 },
              { label: 2, value: 2 },
              { label: 3, value: 3 },
            ],
          },
        },
      },
    },
  ]
}
