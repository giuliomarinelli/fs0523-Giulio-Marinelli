import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpReadmeComponent } from './help-readme.component';

describe('HelpReadmeComponent', () => {
  let component: HelpReadmeComponent;
  let fixture: ComponentFixture<HelpReadmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpReadmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpReadmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
