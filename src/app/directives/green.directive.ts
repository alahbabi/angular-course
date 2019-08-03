import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective implements OnInit {

  @Input() set color(value) {
    this.render.setStyle(this.elRef.nativeElement, 'color', value);
  }

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {

  }

}
