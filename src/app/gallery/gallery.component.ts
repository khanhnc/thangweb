import { Component, OnInit, Inject, AfterViewInit, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { style } from '@angular/animations';

declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  currentIndex = 0;

  slideIndex = 1;
  list_imgs = [
    { link: 'assets/images/gallery/potriat3.jpg' },
    { link: 'assets/images/gallery/gallery2.jpg' },
    { link: 'assets/images/gallery/gallery3.jpg' },
    { link: 'assets/images/gallery/potriat2.jpg' },
    { link: 'assets/images/gallery/gallery5.jpg' },
    { link: 'assets/images/gallery/gallery6.jpg' },
  ];

  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
    console.log(this.document.getElementsByClassName('mySlides'))

  }
  openImgDialog(imgId: number) {
    this.currentIndex = imgId;
    console.log(this.currentIndex)
    $("#imgModal").modal('show');
    $('#carouselIndicators').carousel(4)
  }

  next() {
    $('#carouselIndicators').carousel('next');
  }

  back() {
    $('#carouselIndicators').carousel('prev');
  }


  openModal() {
    this.document.getElementById("myModal").style.display = "flex";
  }
  closeModal() {
    this.document.getElementById("myModal").style.display = "none";
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }


  showSlides(n) {
    let i;
    const slides =  this.document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;;
    const captionText = this.document.getElementById("caption");
    let e : ElementRef;
    console.log( typeof(slides[0]))
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[this.slideIndex - 1].style.display = "block";
  }
}
