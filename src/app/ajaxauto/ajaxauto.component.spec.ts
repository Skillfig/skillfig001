import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxautoComponent } from './ajaxauto.component';

describe('AjaxautoComponent', () => {
  let component: AjaxautoComponent;
  let fixture: ComponentFixture<AjaxautoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxautoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
