import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlFileComponent } from './html-file.component';

describe('HtmlFileComponent', () => {
  let component: HtmlFileComponent;
  let fixture: ComponentFixture<HtmlFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
