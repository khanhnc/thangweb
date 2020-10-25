import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css']
})
export class HomeGalleryComponent implements OnInit {

  list_imgs = [];
  total_imgs = 8;

  constructor() { 
    let single_dim_list = []
    for (let  i=0;i < 8;i++) {
       single_dim_list.push ({id:i, link:'assets/images/gallery/' +'gallery'+ i.toString() + '.jpg', visibleInSlide:false});
     }
     let four_dim_list = [[],[],[],[]];
     let i = 0;
      for (let  j=0;j < 8;j++) {
        four_dim_list[i].push(single_dim_list[j])
        if(i <3) {
          i ++;
        }else {
          i = 0;
        }
      }
      this.list_imgs = four_dim_list;
  }

  ngOnInit(): void {
  }

}
