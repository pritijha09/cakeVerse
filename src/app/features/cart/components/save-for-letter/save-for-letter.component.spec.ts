import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveForLetterComponent } from './save-for-letter.component';

describe('SaveForLetterComponent', () => {
  let component: SaveForLetterComponent;
  let fixture: ComponentFixture<SaveForLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveForLetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveForLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
