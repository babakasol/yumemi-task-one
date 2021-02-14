import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yumemi-task-one';
  states = [
      { name: 'A', selected: false, disabled: false },
      { name: 'B', selected: false, disabled: false },
      { name: 'C', selected: false, disabled: false }
  ]
  allChecked: boolean = false;

  selectionChanged(evt: any) {
    console.log(evt);
  }

}


