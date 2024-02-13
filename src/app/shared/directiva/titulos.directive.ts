import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitulos]'
})
export class TitulosDirective {

  constructor(private elementRef:ElementRef, private renderer:Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement,"font-size","20px"),
    this.renderer.setStyle(this.elementRef.nativeElement,"font-weight","500")
    
   }

}
