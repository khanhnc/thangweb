import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['../gallery.component.scss']
})
export class ModalItemComponent implements OnInit {

  @Input('link') link: string;
  @Input() isVisible: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.link, this.isVisible)
  }
}
