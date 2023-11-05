import { Component } from '@angular/core';
import { MainContentService } from '../main-content.service';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent {

  orderData:any;
  selectedOrderDetails: any

  constructor(
    private service: MainContentService
  ){  
  }

  ngOnInit(){
    this.service.orderData.subscribe(res =>{
      this.orderData = res;
      console.log("*** this.orderData", this.orderData);
    })
  }

  openModal(orderData: any){
    this.selectedOrderDetails = orderData;
  }
}
