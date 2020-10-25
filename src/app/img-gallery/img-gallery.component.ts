import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-gallery',
  templateUrl: './img-gallery.component.html',
  styleUrls: ['./img-gallery.component.css']
})
export class ImgGalleryComponent implements OnInit {
  list_imgs= [];
  total_imgs = 100;
  constructor() { 
    let single_dim_list = []
    for (let  i=0;i < 100;i++) {
        single_dim_list.push ({id:i, link:'assets/images/gallery/' +'gallery'+ i.toString() + '.jpg', visibleInSlide:false});
     }
     let four_dim_list = [[],[],[],[]];
     let i = 0;
      for (let  j=0;j < 100;j++) {
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
