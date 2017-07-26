/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing'
import { FormService } from './form.service'

describe('Service: Form, Angular Tests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormService]
    })
  })

  it('should inject the service instance...',
    inject([FormService], (service: FormService) => {
      expect(service).toBeTruthy()
    }))
})
