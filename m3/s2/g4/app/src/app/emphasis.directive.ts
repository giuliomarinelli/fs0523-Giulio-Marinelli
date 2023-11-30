import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEmphasis]'
})
export class EmphasisDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow'
  }

}
