import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileAndSettingsComponent } from './edit-profile-and-settings.component';

describe('EditProfileAndSettingsComponent', () => {
  let component: EditProfileAndSettingsComponent;
  let fixture: ComponentFixture<EditProfileAndSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileAndSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileAndSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
