import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yumemi-task-one';
  states:any;
  
  constructor(private apiService: ApiService) {
    this.callApi();
  }

  callApi() {
    let data = this.apiService.prefectureApi();
    console.log(data);
    this.states = JSON.str(data);
  }

  selectionChanged(evt: any) {
    console.log(evt);
  }

}


