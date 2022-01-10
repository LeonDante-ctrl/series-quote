import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class Keys {
  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="purple"
   }
}