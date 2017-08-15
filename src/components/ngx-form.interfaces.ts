
export interface NgxFormField {
  type: string
  options?: any[]
  [key: string]: any
}

export interface NgxFormFields {
  [key: string]: NgxFormField | string;
}

export interface NgxFormButton {
  label?: string
  type?: string
  classNames?: string
  click?: any,
}

export interface NgxFormConfig {
  fields: NgxFormFields
  buttons?: NgxFormButton[]
  icon?: string
  title?: string
}
