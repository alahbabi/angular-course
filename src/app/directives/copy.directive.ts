import { Directive, OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective implements OnInit {

  @Input('appCopy') n;

  constructor(private tempRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

    ngOnInit() {
      for (let i = 0; i < this.n; i++) {
        this.vcRef.createEmbeddedView(this.tempRef);
      }
    }
}
