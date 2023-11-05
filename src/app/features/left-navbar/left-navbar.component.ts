import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.scss']
})
export class LeftNavbarComponent {

  menuList = [
    'bi-justify-left',
    'bi-box',
    'bi-file-earmark-plus',
    'bi-check2-all',
    'bi-gear',
    'bi-download'
  ]
}
