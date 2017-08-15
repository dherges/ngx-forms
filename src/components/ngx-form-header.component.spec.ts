import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormHeaderComponent } from './ngx-form-header.component';

describe('NgxFormHeaderComponent', () => {
  let component: NgxFormHeaderComponent;
  let fixture: ComponentFixture<NgxFormHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFormHeaderComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render a default component', () => {
    component.item = {}
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.item).toEqual({});
    expect(component.icon).toBeNull();
    expect(component.title).toBeNull();
  });

  it('should have an icon ', () => {
    const className = 'icon-test'
    component.icon = className
    fixture.detectChanges();
    const iconEl = fixture.nativeElement.querySelector('i')
    expect(iconEl.className).toEqual(className);
  });

  it('should have a title if set', () => {
    const title = 'title-test'
    component.title = title
    fixture.detectChanges();
    const titleEl = fixture.nativeElement.querySelector('span')
    expect(titleEl.innerHTML).toEqual(title);
  });

  it('should set title to "Edit" for an item with id', () => {
    component.item = { id: '1' }
    fixture.detectChanges();
    const titleEl = fixture.nativeElement.querySelector('span')
    expect(titleEl.innerHTML).toEqual('Edit');
  });

  it('should set title to "Add"  for an item with no id', () => {
    component.item = { }
    fixture.detectChanges();
    const titleEl = fixture.nativeElement.querySelector('span')
    expect(titleEl.innerHTML).toEqual('Add');
  });

});
