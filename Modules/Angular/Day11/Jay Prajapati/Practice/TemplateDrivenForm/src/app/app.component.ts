import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivenForm';
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  userModel = new User('','abc@gmail.com',1234567890,'default','morning',true);

  validateTopic(value: string){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }
}

