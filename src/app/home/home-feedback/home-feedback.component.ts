import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-feedback',
  templateUrl: './home-feedback.component.html',
  styleUrls: ['./home-feedback.component.css']
})
export class HomeFeedbackComponent implements OnInit {

  constructor() { }
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  ngOnInit(): void {
  }

}
