import { Component } from '@angular/core';
import { MainContentService } from './main-content.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  constructor(
    private service: MainContentService
  ){
    this.getDashBoardData()
  }

  ngOnInit(){
  }

  getDashBoardData(){
    this.service.getDashboardData().subscribe(res =>{
      if(res){
        this.service.topCards.next(res.top_cards);
        this.service.users.next(res.new_users);
        this.service.orderData.next(res.recent_orders);
      }      
    })
  }
}
