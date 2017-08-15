/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing'
import { NgxFormsService } from './ngx-forms.service'

const getExpectedField = (type, templateType, key, label, options = {}) =>  {
  const defaultTemplateOptions = {
    options: [ ],
    type: templateType,
    label: label,
    placeholder: label,
  }
  const templateOptions = (<any>Object).assign({}, defaultTemplateOptions, options)
  return {
    key,
    type,
    templateOptions,
    className: ''
  }
}

describe('Service: Form, Angular Tests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxFormsService]
    })
  })

  it('should inject the service instance',
    inject([NgxFormsService], (service: NgxFormsService) => {
      expect(service).toBeTruthy()
    }))

  it('should return an input field',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = getExpectedField('input', 'text', 'text', 'Text')
      const field = service.input()
      expect(field).toEqual(expected)
    }))

  it('should return an input field with pre-defined key',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const key = 'MyInput'
      const expected = getExpectedField('input', 'text', key, key)
      const field = service.input(key)
      expect(field).toEqual(expected)
    }))

  it('should return an input field with pre-defined key and options',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const type = 'input'
      const templateType = 'text'
      const key = 'MyInput'
      const options = { placeholder: 'MyEmail123' }
      const expected = getExpectedField(type, templateType, key, key, options)
      const field = service.input(key, options)
      expect(field).toEqual(expected)
    }))

  it('should return an email field',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = getExpectedField('input', 'email', 'email', 'Email')
      const field = service.email()
      expect(field).toEqual(expected)
    }))

  it('should return an email field with pre-defined key',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = getExpectedField('input', 'email', 'MyEmail', 'MyEmail')
      const field = service.email('MyEmail')
      expect(field).toEqual(expected)
    }))

  it('should return an email field with pre-defined key and options',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const type = 'input'
      const templateType = 'email'
      const key = 'MyEmail'
      const options = { placeholder: 'MyEmail123' }
      const expected = getExpectedField(type, templateType, key, key, options)
      const field = service.email(key, options)
      expect(field).toEqual(expected)
    }))

  it('should return a password field',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = getExpectedField('input', 'password', 'password', 'Password')
      const field = service.password()
      expect(field).toEqual(expected)
    }))

  it('should return an password field with pre-defined key and options',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const type = 'input'
      const templateType = 'password'
      const key = 'MyPassword'
      const options = { placeholder: 'MyPassword123' }
      const expected = getExpectedField(type, templateType, key, key, options)
      const field = service.password(key, options)
      expect(field).toEqual(expected)
    }))

  it('should return a date field',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = getExpectedField('input', 'date', 'date', 'Date')
      const field = service.date()
      expect(field).toEqual(expected)
    }))

  it('should return an date field with pre-defined key and options',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const type = 'input'
      const templateType = 'date'
      const key = 'MyDate'
      const options = { placeholder: 'MyDate123' }
      const expected = getExpectedField(type, templateType, key, key, options)
      const field = service.date(key, options)
      expect(field).toEqual(expected)
    }))

  it('should return a textarea field',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = getExpectedField('textarea', 'text', 'textarea', 'Textarea')
      const field = service.textarea()
      expect(field).toEqual(expected)
    }))

  it('should return an textarea field with pre-defined key and options',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const type = 'textarea'
      const templateType = 'text'
      const key = 'MyTextarea'
      const options = { placeholder: 'MyTextarea123' }
      const expected = getExpectedField(type, templateType, key, key, options)
      const field = service.textarea(key, options)
      expect(field).toEqual(expected)
    }))

  it('should return a wysiwyg field',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = getExpectedField('wysiwyg', 'text', 'wysiwyg', 'Wysiwyg')
      const field = service.wysiwyg()
      expect(field).toEqual(expected)
    }))

  it('should return an wysiwyg field with pre-defined key and options',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const type = 'wysiwyg'
      const templateType = 'text'
      const key = 'MyWysiwyg'
      const options = { placeholder: 'MyWysiwyg123' }
      const expected = getExpectedField(type, templateType, key, key, options)
      const field = service.wysiwyg(key, options)
      expect(field).toEqual(expected)
    }))

  it('should return a select field',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = getExpectedField('select', 'text', 'select', 'Select')
      const field = service.select()
      expect(field).toEqual(expected)
    }))

  it('should return an select field with pre-defined key and options',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const type = 'select'
      const templateType = 'text'
      const key = 'MtSelect'
      const options = { placeholder: 'MtSelect123' }
      const expected = getExpectedField(type, templateType, key, key, options)
      const field = service.select(key, options)
      expect(field).toEqual(expected)
    }))

  it('use field() directly to create a field',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = getExpectedField('input', 'text', 'text', 'Text')
      const field = service.field()
      expect(field).toEqual(expected)
    }))

  it('use parseFields to create an array of fields',
    inject([NgxFormsService], (service: NgxFormsService) => {
      const expected = [
        getExpectedField('input', 'text', 'name', 'Enter your name'),
        getExpectedField('input', 'email', 'email', 'Email'),
      ]
      const config = {
        name: {
          type: 'input',
          label: 'Enter your name',
        },
        email: 'email',
      }
      const fields = service.parseFields(config)
      expect(fields).toEqual(expected)
    }))
})
