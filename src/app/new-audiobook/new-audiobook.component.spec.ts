import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAudiobookComponent } from './new-audiobook.component';

describe('NewAudiobookComponent', () => {
  let component: NewAudiobookComponent;
  let fixture: ComponentFixture<NewAudiobookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAudiobookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAudiobookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
