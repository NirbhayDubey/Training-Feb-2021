import { Component } from '@angular/core';
export type EditorType = 'student' | 'father' | 'mother';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-day9';
  editor : EditorType = 'student';
  get showStudentEditor ()
  {
    return this.editor === 'student';
  }

  get showFatherEditor ()
  {
    return this.editor === 'father';
  }

  get showMotherEditor ()
  {
    return this.editor === 'mother';
  }

  toggleEditor (type : EditorType)
  {
    this.editor = type;
  }
}
