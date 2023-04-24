import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTextSComponent } from './button-text-s.component';

describe('ButtonTextSComponent', () => {
  let component: ButtonTextSComponent;
  let fixture: ComponentFixture<ButtonTextSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonTextSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTextSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
