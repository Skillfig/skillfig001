import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobslistsComponent } from './jobslists.component';

describe('JobslistsComponent', () => {
  let component: JobslistsComponent;
  let fixture: ComponentFixture<JobslistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobslistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobslistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
