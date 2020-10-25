import { Component, OnInit, Inject, Input, EventEmitter, ElementRef, ViewChildren, 
  QueryList, AfterViewInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ModalItemComponent } from '../modal-item/modal-item.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../gallery.component.scss']
})

export class ModalComponent implements AfterViewInit, OnInit {
  @Input() openModalEvent= new EventEmitter();
  @Input() currentSlideEvent= new EventEmitter<number>();
  @Input() list_imgs = [];
  @Input() total_imgs = 0;
  @ViewChildren(ModalItemComponent) modalItems: QueryList<ModalItemComponent>;
  slideIndex = 1;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }
    
   ngOnInit() {
    this.showSlides();
   }
    
   ngAfterViewInit() {
    this.currentSlideEvent.subscribe(value => this.currentSlide(value));
    this.openModalEvent.subscribe(()=> this.openModal());
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyEvent(event: KeyboardEvent) {
    if(event.code === "Escape") {
      this.closeModal();
    }
    if(event.code === "ArrowLeft") {
      this.plusSlides(-1);
    }
    if(event.code === "ArrowRight") {
      this.plusSlides(1);
    }
  }

  closeModal() {  
    this.document.getElementById("myModal").style.display = "none";
  }
  
  openModal() {
    this.document.getElementById("myModal").style.display = "flex";
  }

  plusSlides(n) {
    this.slideIndex += n
    this.showSlides();
    console.log(this.slideIndex, this.total_imgs)
  }

  currentSlide(slidenumber) {
    this.slideIndex = slidenumber;
    this.showSlides();
  }

  showSlides() {
      if(this.slideIndex >= this.total_imgs) {this.slideIndex = 0};
      for (let i =0 ; i < this.list_imgs.length; i++) {
        for (let j =0 ; j < this.list_imgs[i].length; j ++) {
          if(this.slideIndex ===  this.list_imgs[i][j].id) {
            this.list_imgs[i][j].visibleInSlide = true;
          } else {
            this.list_imgs[i][j].visibleInSlide = false;
          }
        }
      }
    }
}
