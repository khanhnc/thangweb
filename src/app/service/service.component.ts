import { Component, OnInit } from '@angular/core';
import { faCamera, faVideo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  currentContent = "photograph";
  faCamera = faCamera;
  faVideo = faVideo;
  constructor() { }

  ngOnInit(): void {
  }
}
