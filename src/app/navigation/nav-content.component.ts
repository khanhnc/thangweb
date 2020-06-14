import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./navigation.component.css'],
  animations:[
    trigger('toggleOpen', [     // trigger block
      state('true', style({      // final CSS following animation
          display: "block"
      })),
      state('false', style({
        display: "hidden"
      })),
      transition('true => false', animate('1000ms linear')),  // animation timing
      transition('false => true', animate('1000ms linear'))
    ])
  ]
})
export class NavContent implements OnInit {
  
  isOpen: string = 'false';

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropDown() {
    this.isOpen = this.isOpen === 'true' ? 'false' : 'true'; // change in data-bound value
  }
}
