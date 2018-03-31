import { Directive,HostListener,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  constructor(public el:ElementRef) { 
    
  }
@HostListener('click') onclick(){

let value:string = this.el.nativeElement.value;
this.el.nativeElement.value = value.toUpperCase();
console.log("yes custom directive" + value);
}

@HostListener('blur') onblur(){
  console.log("on blur");
  this.el.nativeElement.style.backgroundColor = 'yellow';
}

@Input() highlightColor: string;

@HostListener('mouseenter') onMouseEnter() {
  this.highlight(this.highlightColor || 'red');
}
 @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

 private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
