import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditprofileComponent } from './user-editprofile.component';

describe('UserEditprofileComponent', () => {
  let component: UserEditprofileComponent;
  let fixture: ComponentFixture<UserEditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
