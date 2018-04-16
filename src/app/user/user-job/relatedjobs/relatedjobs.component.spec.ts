import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedjobsComponent } from './relatedjobs.component';

describe('RelatedjobsComponent', () => {
  let component: RelatedjobsComponent;
  let fixture: ComponentFixture<RelatedjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
