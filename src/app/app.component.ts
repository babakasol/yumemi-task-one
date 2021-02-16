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
  data: any;
  
  constructor(private apiService: ApiService) {
    this.callApi();
  }

  callApi() {
    this.apiService.prefectureApi().subscribe( data => {
      console.log(data);
      this.states = data.result;
    })
    console.log(this.states);
  }

  selectionChanged(evt: any) {
    console.log(evt);
  }

}


