import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAppliedSuccessComponent } from './job-applied-success.component';

describe('JobAppliedSuccessComponent', () => {
  let component: JobAppliedSuccessComponent;
  let fixture: ComponentFixture<JobAppliedSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAppliedSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAppliedSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
