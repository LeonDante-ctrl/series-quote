import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class keys {
  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="purple"
   }
}