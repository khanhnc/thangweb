import { Component, OnInit, Inject, Input, EventEmitter, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../gallery.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() openModalEvent= new EventEmitter();
  @Input() currentSlideEvent= new EventEmitter<number>();
  @Input() list_imgs = [];

  slideIndex = 1;

  constructor(@Inject(DOCUMENT) private document: Document) {
   }

  ngOnInit(): void {
    console.log("imgs", this.list_imgs)
    setTimeout(() => {
      this.currentSlideEvent.subscribe(value => this.currentSlide(value));
      this.openModalEvent.subscribe(()=> this.openModal());
    }, 2000);
  }

  closeModal() {  
    this.document.getElementById("myModal").style.display = "none";
  }
  
  openModal() {
    console.log("open thisModal", this.slideIndex);
    return
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
