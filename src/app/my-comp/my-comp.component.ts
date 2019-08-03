import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  @ViewChild('myInput') myInput: ElementRef;

  number = 5 ;

  active = true ;

  notActive = false ;

  val = 'Hello';

  open = true ;

  numberOfSwitch = 2 ;

  courses = ['Java' , 'Node Js', 'Spring'];

  test = false ;

  constructor() { }

  ngOnInit() {
    console.log(this.myInput);
  }

  onClick() {
    console.log('click');
  }

  onClickWithEvent(e) {
    console.log(e.target);
  }

  onKeyUp(e) {
    console.log(e.target.value);
  }

  onKeyUpOneWayBinding() {
    console.log(this.val);
  }

  onKeyUpTwoWayBinding() {
    console.log(this.val);
  }

  onKeyUpTemplateVar(e) {
    console.log(e.value);
  }

  onKeyUpElementChild() {
    console.log(this.myInput.nativeElement);
  }

}
