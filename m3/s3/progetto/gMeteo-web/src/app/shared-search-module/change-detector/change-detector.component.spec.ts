import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectorComponent } from './change-detector.component';

describe('ChangeDetectorComponent', () => {
  let component: ChangeDetectorComponent;
  let fixture: ComponentFixture<ChangeDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeDetectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
