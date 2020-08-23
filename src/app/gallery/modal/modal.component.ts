import { Component, OnInit, Inject, Input, EventEmitter, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() openModalEvent= new EventEmitter();
  @Input() list_imgs = [];

  slideIndex = 1;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
    this.openModalEvent.subscribe(()=> this.openModal())
  }
  closeModal() {  
    this.document.getElementById("myModal").style.display = "none";
  }
  openModal() {
    this.document.getElementById("myModal").style.display = "flex";
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    const slides = this.document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;;
    const captionText = this.document.getElementById("caption");
    let e: ElementRef;
    console.log(typeof (slides[0]))
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[this.slideIndex - 1].style.display = "block";
  }
}
