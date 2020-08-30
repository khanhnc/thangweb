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
    console.log(this.list_imgs)
    this.currentSlideEvent.subscribe(value => this.currentSlide(value));
    this.openModalEvent.subscribe(()=> this.openModal());
    this.showSlides(this.slideIndex);
  }

  closeModal() {  
    this.document.getElementById("myModal").style.display = "none";
  }
  
  openModal() {
    this.document.getElementById("myModal").style.display = "flex";
  }

  plusSlides(n) {
    console.log("plusSlide", n)
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(slidenumber) {
    console.log("before CurrentSlide", this.slideIndex,slidenumber)
    this.slideIndex = slidenumber;
    this.showSlides(this.slideIndex);
    console.log("after CurrentSlide", this.slideIndex)
  }

  showSlides(n:number) {
    const slides = this.document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;;
    console.log(slides) 
    let e: ElementRef;
      if (n > slides.length) { this.slideIndex = 1 }
      if (n < 0) { this.slideIndex = slides.length }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex].style.display = "block";
  }
}
