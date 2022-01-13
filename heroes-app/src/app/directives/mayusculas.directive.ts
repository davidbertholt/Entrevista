import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appMayusculas]'
})
export class MayusculasDirective {

  constructor(private readonly elRef: ElementRef) {}
  @HostListener('input', ['$event'])
  onChangeInput(event: Event) {
    const newValue = this.elRef.nativeElement.value.toUpperCase();
    this.elRef.nativeElement.value = newValue;
  }

}
