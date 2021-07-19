import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { ActivityComponent } from './activity/activity.component';
import { BookmarkedQuestionsComponent } from './bookmarked-questions/bookmarked-questions.component';
import { DevelopStoryComponent } from './develop-story/develop-story.component';
import { EditProfileAndSettingsComponent } from './edit-profile-and-settings/edit-profile-and-settings.component';
import { ProfileComponent } from './profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [{ path: '', component: ProfileComponent,
children:[
  {path : '',component: UserProfileComponent},
  {path : 'userProfile', component: UserProfileComponent},
  {path : 'activity', component: ActivityComponent},
  {path : 'developStory', component: DevelopStoryComponent},
  {path : 'editProfile', component: EditProfileAndSettingsComponent},
  {path : 'bookmarked',component : BookmarkedQuestionsComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
