import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRequiredFieldFormComponent } from './error-required-field-form.component';

describe('ErrorRequiredFieldFormComponent', () => {
  let component: ErrorRequiredFieldFormComponent;
  let fixture: ComponentFixture<ErrorRequiredFieldFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorRequiredFieldFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorRequiredFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
