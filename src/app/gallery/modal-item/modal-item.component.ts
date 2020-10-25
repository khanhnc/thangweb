import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';
@Component({
  selector: 'modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['../gallery.component.scss']
})
export class ModalItemComponent implements OnInit {

  @Input('link') link: string;
  @Input() isVisible: boolean;

  constructor(private sanitizer: DomSanitizer) { }
  getStyle() {
    // snip snip -> fetch the url from somewhere
    const style = `background-image: url(${this.link})`;
    // sanitize the style expression
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
  ngOnInit(): void {
    
    }
}
