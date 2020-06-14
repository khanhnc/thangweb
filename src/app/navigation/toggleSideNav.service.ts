import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root',})
export class ToggleSideNav {
    @Output() openStatus = false;
    @Output() openSideNav = new EventEmitter();
    @Output() closeSideNav = new EventEmitter();

    constructor() { }

}