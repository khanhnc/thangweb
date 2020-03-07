import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  list_imgs = [
    { id: 1, link: 'assets/images/gallery/gallery1.jpg' },
    { id: 2, link: 'assets/images/gallery/gallery2.jpg' },
    { id: 3, link: 'assets/images/gallery/gallery3.jpg' },
    { id: 4, link: 'assets/images/gallery/gallery4.jpg' },
    { id: 5, link: 'assets/images/gallery/gallery5.jpg' },
    { id: 6, link: 'assets/images/gallery/gallery6.jpg' },
    { id: 7, link: 'assets/images/gallery/gallery7.jpg' },
    { id: 8, link: 'assets/images/gallery/gallery8.jpg' },
    // { id: 9, link: 'assets/images/gallery/gallery9.jpg' },
    // { id: 10, link: 'assets/images/gallery/gallery10.jpg' },
    // { id: 11, link: 'assets/images/gallery/gallery11.jpg' },
    // { id: 12, link: 'assets/images/gallery/gallery12.jpg' }
  ];

  current_img = { link: '' };
  constructor() { }

  ngOnInit(): void {
  }

  openImgDialog(imgId: number) {
    this.current_img = this.list_imgs.find(v => v.id === imgId);
    $("#imgModal").modal('show');
  }

}
