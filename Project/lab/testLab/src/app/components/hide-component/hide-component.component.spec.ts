import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideComponentComponent } from './hide-component.component';

describe('HideComponentComponent', () => {
  let component: HideComponentComponent;
  let fixture: ComponentFixture<HideComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
