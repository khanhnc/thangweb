import { Component, OnInit, Inject, Input, EventEmitter, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ModalItemComponent } from '../modal-item/modal-item.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../gallery.component.scss']
})
export class ModalComponent implements AfterViewInit {
  @Input() openModalEvent= new EventEmitter();
  @Input() currentSlideEvent= new EventEmitter<number>();
  @Input() list_imgs = [];
  @ViewChildren(ModalItemComponent) modalItems: QueryList<ModalItemComponent>;

  slideIndex = 1;

  constructor(@Inject(DOCUMENT) private document: Document) {
   }

  ngAfterViewInit() {
    this.currentSlideEvent.subscribe(value => this.currentSlide(value));
    this.openModalEvent.subscribe(()=> this.openModal());
    console.log(this.modalItems.toArray());
    this.showSlides(this.slideIndex);
  }

  closeModal() {  
    this.document.getElementById("myModal").style.display = "none";
  }
  
  openModal() {
    console.log("open this Modal", this.slideIndex);
    this.document.getElementById("myModal").style.display = "flex";
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(slidenumber) {
    console.log(slidenumber)
    this.showSlides(this.slideIndex = slidenumber);
  }

  showSlides(n) {
      const slides = this.document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;;
      const captionText = this.document.getElementById("caption");
      let e: ElementRef;
      if (n > slides.length) { this.slideIndex = 1 }
      if (n < 1) { this.slideIndex = slides.length }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex - 1].style.display = "block";
  }
}
