import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Output() openModalEvent = new EventEmitter();
  @Output() currentSlideEvent = new EventEmitter<number>();

  list_imgs = [
    { link: 'assets/images/gallery/potriat3.jpg' },
    { link: 'assets/images/gallery/gallery2.jpg' },
    { link: 'assets/images/gallery/gallery3.jpg' },
    { link: 'assets/images/gallery/potriat2.jpg' },
    { link: 'assets/images/gallery/gallery5.jpg' },
    { link: 'assets/images/gallery/gallery6.jpg' },
  ];

  constructor() { }


  openModal() {
    this.openModalEvent.emit();
  }

  currentSlide(slideNumber) {
    this.currentSlideEvent.emit(slideNumber);
  }

}
