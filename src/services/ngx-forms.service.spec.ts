/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing'
import { NgxFormsService } from './ngx-forms.service'

describe('Service: Form, Angular Tests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxFormsService]
    })
  })

  it('should inject the service instance...',
    inject([NgxFormsService], (service: NgxFormsService) => {
      expect(service).toBeTruthy()
    }))

  it('should return an input field...',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = {
        key: 'inputKey',
        type: 'input',
        templateOptions: {
          options: [ ],
          type: 'text',
          label: 'Input',
          placeholder: 'Input',
        },
        className: ''
      }
      const field = service.input('inputKey', { placeholder: 'Input', label: 'Input' })
      expect(field).toEqual(expected)
    }))

  it('should return an email field...',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = {
        key: 'emailKey',
        type: 'input',
        templateOptions: {
          options: [ ],
          type: 'email',
          label: 'Email',
          placeholder: 'Email',
        },
        className: ''
      }
      const field = service.email('emailKey', { placeholder: 'Email', label: 'Email' })
      expect(field).toEqual(expected)
    }))

  it('should return a password field...',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = {
        key: 'passwordKey',
        type: 'input',
        templateOptions: {
          options: [ ],
          type: 'password',
          label: 'Password',
          placeholder: 'Password',
        },
        className: ''
      }
      const field = service.password('passwordKey', { placeholder: 'Password', label: 'Password' })
      expect(field).toEqual(expected)
    }))

  it('should return a date field...',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = {
        key: 'dateKey',
        type: 'input',
        templateOptions: {
          options: [ ],
          type: 'date',
          label: 'Date',
          placeholder: 'Date',
        },
        className: ''
      }
      const field = service.date('dateKey', { placeholder: 'Date', label: 'Date' })
      expect(field).toEqual(expected)
    }))

  it('should return a textarea field...',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = {
        key: 'textareaKey',
        type: 'textarea',
        templateOptions: {
          options: [ ],
          type: 'text',
          label: 'Text Area',
          placeholder: 'Text Area',
        },
        className: ''
      }
      const field = service.textarea('textareaKey', { placeholder: 'Text Area', label: 'Text Area' })
      expect(field).toEqual(expected)
    }))

  it('should return a wysiwyg field...',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = {
        key: 'wysiwygKey',
        type: 'wysiwyg',
        templateOptions: {
          options: [ ],
          type: 'text',
          label: 'Wysiwyg',
          placeholder: 'Wysiwyg',
        },
        className: ''
      }
      const field = service.wysiwyg('wysiwygKey', { placeholder: 'Wysiwyg', label: 'Wysiwyg' })
      expect(field).toEqual(expected)
    }))

  it('should return a select field...',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = {
        key: 'selectKey',
        type: 'select',
        templateOptions: {
          options: [ ],
          type: 'text',
          label: 'Select',
          placeholder: 'Select',
        },
        className: ''
      }
      const field = service.select('selectKey', { placeholder: 'Select', label: 'Select' })
      expect(field).toEqual(expected)
    }))

  it('use field() directly to create a field...',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = {
        key: 'selectKey',
        type: 'select',
        templateOptions: {
          options: [ ],
          type: 'text',
          label: 'Select',
          placeholder: 'Select',
        },
        className: ''
      }
      const field = service.field('select', 'text', 'selectKey', { placeholder: 'Select', label: 'Select' })
      expect(field).toEqual(expected)
    }))

  it('use parseFields to create an array of fields...',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = [{
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Name',
          options: [],
          placeholder: 'Enter your name'
        },
        className: ''
      }, {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email',
          options: [],
          placeholder: 'Email'
        },
        className: ""
      } ]
      const config = {
        name: {
          type: 'input',
          placeholder: 'Enter your name',
        },
        email: 'email',
      }
      const fields = service.parseFields(config)
      expect(fields).toEqual(expected)
    }))
})
