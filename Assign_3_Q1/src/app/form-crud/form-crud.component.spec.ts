import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrudComponent } from './form-crud.component';

describe('FormCrudComponent', () => {
  let component: FormCrudComponent;
  let fixture: ComponentFixture<FormCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCrudComponent]
    });
    fixture = TestBed.createComponent(FormCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
