import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalItemComponent } from './modal-item/modal-item.component';
import { GalleryComponent } from './gallery.component';

@NgModule({
  declarations: [ModalComponent, ModalItemComponent, GalleryComponent],
  imports: [CommonModule],
  exports:[ModalComponent, ModalItemComponent, GalleryComponent]
})
export class GalleryModule { }
