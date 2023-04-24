import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicitTableComponent } from './explicit-table.component';

describe('ExplicitTableComponent', () => {
  let component: ExplicitTableComponent;
  let fixture: ComponentFixture<ExplicitTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplicitTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplicitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
