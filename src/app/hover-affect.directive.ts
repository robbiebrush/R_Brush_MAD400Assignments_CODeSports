import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  private h2 = document.getElementById('title');
  private type = document.getElementById('type');

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.el.nativeElement == this.h2) {
      this.type!.style.fontWeight = 'bold';
    } else {
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.el.nativeElement == this.h2) {
      this.type!.style.fontWeight = 'normal';
    } else {
      this.el.nativeElement.style.fontWeight = 'normal';
    }
  }
}
