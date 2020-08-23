import { Component, OnInit, Input } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./navigation.component.scss'],

})
export class NavContent implements OnInit {
  faSortDown = faSortDown;

  constructor() { }

  ngOnInit(): void {

  }

}
