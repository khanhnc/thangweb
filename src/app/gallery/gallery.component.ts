import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Output() openModalEvent = new EventEmitter();
  @Output() currentSlideEvent = new EventEmitter<number>();

  list_imgs = [];

  constructor() {
    let single_dim_list = []
    for (let  i=0;i < 40;i++) {
        single_dim_list.push ({id:i, link:'assets/images/gallery/' + i.toString() + '.jpg'});
     }
     let four_dim_list = [[],[],[],[]];
     let i = 0;
      for (let  j=0;j < 40;j++) {
        four_dim_list[i].push(single_dim_list[j])
        if(i <3) {
          i ++;
        }else {
          i = 0;
        }
      }
      this.list_imgs = four_dim_list;
    }
  openModal() {
    this.openModalEvent.emit();
  }

  currentSlide(slideNumber) {
    this.currentSlideEvent.emit(slideNumber);
  }

}
