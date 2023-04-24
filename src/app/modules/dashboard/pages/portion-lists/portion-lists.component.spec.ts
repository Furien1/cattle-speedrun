import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortionListsComponent } from './portion-lists.component';

describe('PortionListsComponent', () => {
  let component: PortionListsComponent;
  let fixture: ComponentFixture<PortionListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortionListsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortionListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
