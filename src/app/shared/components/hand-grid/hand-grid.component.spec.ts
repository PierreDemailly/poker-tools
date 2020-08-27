import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandGridComponent } from './hand-grid.component';

describe('HandGridComponent', () => {
  let component: HandGridComponent;
  let fixture: ComponentFixture<HandGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
