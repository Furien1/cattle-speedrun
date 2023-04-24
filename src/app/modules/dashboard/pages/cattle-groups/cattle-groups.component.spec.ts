import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleGroupsComponent } from './cattle-groups.component';

describe('CattleGroupsComponent', () => {
  let component: CattleGroupsComponent;
  let fixture: ComponentFixture<CattleGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CattleGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CattleGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
