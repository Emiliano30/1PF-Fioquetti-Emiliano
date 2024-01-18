import { Directive, ElementRef, HostListener } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Directive({
  selector: '[appSoloNumero]'
})
export class SoloNumeroDirective {

  constructor(private elementRef:ElementRef) { }
  @HostListener('input',['$event'])
  cambiarInput(event:Event){
    const soloNumero = /[^0-9]*/g
    const resultado = this.elementRef.nativeElement.value
    this.elementRef.nativeElement.value = resultado.replace(soloNumero, '')
    if(resultado !== this.elementRef.nativeElement.value)
    event.stopPropagation()
  }

}
