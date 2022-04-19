import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[kbAutofocus]'
})
export class AutoFocusDirective {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(){
    this.elementRef.nativeElement.focus();
  }
}
