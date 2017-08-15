import { Injectable } from '@angular/core'

// Humanize a string
// From: https://stackoverflow.com/a/28339742/477550
const humanize = str => str
  .replace(/^[\s_]+|[\s_]+$/g, '')
  .replace(/[_\s]+/g, ' ')
  .replace(/^[a-z]/, m => m.toUpperCase() )

@Injectable()
export class NgxFormsService {

  parseFields(fields): any[] {
    return Object.keys(fields).map(fieldName => {

      // Get the field definition and type
      const fieldDef = fields[fieldName]
      const fieldType = fieldDef.type || 'input'

      // If the field definition is a string then that serves as the type and will use the inputs default options
      return (typeof fieldDef === 'string')
          ? this[fieldDef](fieldName)
          : this[fieldType](fieldName, fieldDef)
    })
  }

  field(type = 'input', templateType = 'text', key: string = null, options: any = {}) {
    // Set the default model key name
    key = key || type

    // Set some default values when they are not passed in
    options['label'] = options['label'] || humanize(key)
    options['placeholder'] = options['placeholder'] || options['label']
    options['options'] = options['options'] || []

    // Start the formly templateOptions
    const templateOptions = {
      type: templateType,
    }

    // This are the keys that we need to put into formly's templateOptions
    const toKeys = [
      'disabled',
      'label',
      'options',
      'placeholder',
    ]

    // Loop over all of the above and set them if found
    toKeys.forEach(toKey => {
      if (options[toKey]) {
        templateOptions[toKey] = options[toKey]
      }
    })

    // Return a formly compatible field
    return {
      key,
      type,
      templateOptions,
      className: options.className || '',
    }
  }

  /**
   * @param {string} key
   * @param options
   * @return {{key: string; type: any; templateOptions: {type: any}; className: string}}
   */
  input(key: string = null, options: any = {}) {
    return this.field('input', 'text', key, options)
  }

  email(key: string = null, options: any = {}) {
    return this.field('input', 'email', key, options)
  }

  password(key: string = null, options: any = {}) {
    return this.field('input', 'password', key, options)
  }

  date(key: string = null, options: any = {}) {
    return this.field('input', 'date', key, options)
  }

  textarea(key: string = null, options: any = {}) {
    return this.field('textarea', 'text', key, options)
  }

  wysiwyg(key: string = null, options: any = {}) {
    return this.field('wysiwyg', 'text', key, options)
  }

  select(key: string = null, options: any = {}) {
    return this.field('select', 'text', key, options)
  }

}
