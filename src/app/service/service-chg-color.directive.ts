
import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appServiceChgColor]'
})
export class ServiceChgColorDirective {
  @Input('id') elem: any;
  @Input('currentContent') currentContent: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  @HostListener('mouseover') onMouseOver() {
    this.ChangeBgColor('black');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBgColor('#777777');
  }
  ChangeBgColor(color: string) {
    this.renderer.setStyle(this.elem, 'color', color);
  }
}