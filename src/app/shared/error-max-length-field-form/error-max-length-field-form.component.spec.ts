import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMaxLengthFieldFormComponent } from './error-max-length-field-form.component';

describe('ErrorMaxLengthFieldFormComponent', () => {
  let component: ErrorMaxLengthFieldFormComponent;
  let fixture: ComponentFixture<ErrorMaxLengthFieldFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMaxLengthFieldFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorMaxLengthFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
