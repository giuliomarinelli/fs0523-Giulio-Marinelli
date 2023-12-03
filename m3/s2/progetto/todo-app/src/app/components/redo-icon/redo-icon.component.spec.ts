import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedoIconComponent } from './redo-icon.component';

describe('RedoIconComponent', () => {
  let component: RedoIconComponent;
  let fixture: ComponentFixture<RedoIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedoIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
