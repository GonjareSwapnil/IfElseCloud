import { Component, Input } from '@angular/core';
import { MainContentService } from '../main-content.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss']
})
export class TopCardsComponent {
  
  topCardData: any;

  constructor(
    private service: MainContentService
  ){  
  }

  ngOnInit(){
    this.service.topCards.subscribe(res =>{
      this.topCardData = res;
      console.log("*** this.topCardData", this.topCardData);
    })
  }
}
