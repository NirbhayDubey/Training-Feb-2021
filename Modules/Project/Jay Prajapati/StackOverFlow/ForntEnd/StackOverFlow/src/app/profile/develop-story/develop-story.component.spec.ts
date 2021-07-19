import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopStoryComponent } from './develop-story.component';

describe('DevelopStoryComponent', () => {
  let component: DevelopStoryComponent;
  let fixture: ComponentFixture<DevelopStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
