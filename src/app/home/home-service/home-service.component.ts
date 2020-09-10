import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.scss']
})
export class HomeServiceComponent implements OnInit {
  serviceImgs = [
    './assets/images/home-service/baby.jpg',
    '/assets/images/home-service/wedd.jpg',
    './assets/images/home-service/portrait.jpg'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
