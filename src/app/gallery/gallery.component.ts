import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  currentIndex = 0;
  list_imgs = [
    { link: 'assets/images/gallery/gallery1.jpg' },
    { link: 'assets/images/gallery/gallery2.jpg' },
    { link: 'assets/images/gallery/gallery3.jpg' },
    { link: 'assets/images/gallery/gallery4.jpg' },
    { link: 'assets/images/gallery/gallery5.jpg' },
    { link: 'assets/images/gallery/gallery6.jpg' },
    { link: 'assets/images/gallery/gallery7.jpg' },
    { link: 'assets/images/gallery/gallery8.jpg' },
    { link: 'assets/images/gallery/gallery9.jpg' },
    { link: 'assets/images/gallery/gallery10.jpg' },
    { link: 'assets/images/gallery/gallery11.jpg' },
    { link: 'assets/images/gallery/gallery12.jpg' }
  ];

  constructor() { }
  ngOnInit(): void {
  }

  openImgDialog(imgId: number) {
    this.currentIndex = imgId;
    $("#imgModal").modal('show');
    $('#carouselIndicators').carousel(imgId) //
  }

  next() {
    $('#carouselIndicators').carousel('next');
  }

  back() {
    $('#carouselIndicators').carousel('prev');
  }

}
