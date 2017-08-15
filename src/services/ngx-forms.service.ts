import { Injectable } from '@angular/core'
import { Validators } from '@angular/forms'

declare const global: any; // To make AoT compiler (ngc) happy

@Injectable()
export class NgxFormsService {

  field(type, templateType, key: string, options: any = {}) {

    const templateOptions = {
      type: templateType,
    }

    const className = options.className || ''

    // const validators = {
    //   validation: Validators.compose([Validators.required]),
    // }

    const toKeys = [
      'disabled',
      'label',
      'options',
      'placeholder',
    ]

    toKeys.forEach(toKey => {
      if (options[toKey]) {
        templateOptions[toKey] = options[toKey]
      }
    })

    return {
      key,
      type,
      templateOptions,
      className,
      // validators,
    }
  }

  /**
   * @param {string} key
   * @param options
   * @return {{key: string; type: any; templateOptions: {type: any}; className: string}}
   */
  input(key: string, options: any = {}) {
    return this.field('input', 'text', key, options)
  }

  email(key: string, options: any = {}) {
    return this.field('input', 'email', key, options)
  }

  password(key: string, options: any = {}) {
    return this.field('input', 'password', key, options)
  }

  date(key: string, options: any = {}) {
    return this.field('input', 'date', key, options)
  }

  textarea(key: string, options: any = {}) {
    return this.field('textarea', 'text', key, options)
  }

  wysiwyg(key: string, options: any = {}) {
    return this.field('wysiwyg', 'text', key, options)
  }

  select(key: string, options: any = {}) {
    return this.field('select', 'text', key, options)
  }

}
