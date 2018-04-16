import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSkillProfileComponent } from './user-skill-profile.component';

describe('UserSkillProfileComponent', () => {
  let component: UserSkillProfileComponent;
  let fixture: ComponentFixture<UserSkillProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSkillProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSkillProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
