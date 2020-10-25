import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Output() openModalEvent = new EventEmitter();
  @Output() currentSlideEvent = new EventEmitter<number>();
  @Input() list_imgs = [];
  @Input() total_imgs = 0;

  constructor() {
    console.log(this.total_imgs)
    }
  openModal() {
    this.openModalEvent.emit();
  }

  currentSlide(slideNumber) {
    this.currentSlideEvent.emit(slideNumber);
  }
}
