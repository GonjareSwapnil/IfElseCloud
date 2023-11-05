import { Component } from '@angular/core';
import { MainContentService } from '../main-content.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent {
  userData: any;

  constructor(
    private service: MainContentService
  ){  
  }

  ngOnInit(){
    this.service.users.subscribe(res =>{
      this.userData = res;
      console.log("*** this.userData", this.userData);
      
    })
  }
}
