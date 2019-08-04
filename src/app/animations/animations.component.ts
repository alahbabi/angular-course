import { Component, OnInit } from '@angular/core';
import { transition, trigger, style, animate } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations : [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          opacity : 0,
          transform : 'translateX(100px)'
        }),
        animate(1000, style({
          opacity : 1,
          transform : 'translateX(0)'
        }))
      ])
    ])
  ]
})
export class AnimationsComponent implements OnInit {

  courses = ['Node', 'Java'];
  constructor() { }

  ngOnInit() {
  }

}
