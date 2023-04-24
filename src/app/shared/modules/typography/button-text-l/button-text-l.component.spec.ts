import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTextLComponent } from './button-text-l.component';

describe('ButtonTextLComponent', () => {
  let component: ButtonTextLComponent;
  let fixture: ComponentFixture<ButtonTextLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonTextLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTextLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
