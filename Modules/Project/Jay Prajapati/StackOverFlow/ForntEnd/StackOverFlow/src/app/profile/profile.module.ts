import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ActivityComponent } from './activity/activity.component';
import { DevelopStoryComponent } from './develop-story/develop-story.component';
import { EditProfileAndSettingsComponent } from './edit-profile-and-settings/edit-profile-and-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookmarkedQuestionsComponent } from './bookmarked-questions/bookmarked-questions.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UserProfileComponent,
    ActivityComponent,
    DevelopStoryComponent,
    EditProfileAndSettingsComponent,
    BookmarkedQuestionsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class ProfileModule { }
