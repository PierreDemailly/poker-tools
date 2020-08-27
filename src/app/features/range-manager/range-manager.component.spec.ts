import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeManagerComponent } from './range-manager.component';

describe('RangeManagerComponent', () => {
  let component: RangeManagerComponent;
  let fixture: ComponentFixture<RangeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
