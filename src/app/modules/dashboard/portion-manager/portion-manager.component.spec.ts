import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortionManagerComponent } from './portion-manager.component';

describe('PortionManagerComponent', () => {
  let component: PortionManagerComponent;
  let fixture: ComponentFixture<PortionManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortionManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
