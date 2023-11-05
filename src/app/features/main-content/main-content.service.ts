import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainContentService {
  url= 'https://1.api.fy23ey05.careers.ifelsecloud.com/';
  topCards = new BehaviorSubject<any>([]);
  users = new BehaviorSubject<any>([]);
  orderData = new BehaviorSubject<any>([]);
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getDashboardData(){
    return this.httpClient.get<any>(this.url);
  }
}
