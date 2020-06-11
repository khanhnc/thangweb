import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root',})
export class ToggleSideNav {

    @Output() toggleSideNav = new EventEmitter();

    constructor() { }

}