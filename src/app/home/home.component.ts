import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myColor = '#080';

  myText = 'my Text';

  myObject = {name: 'Abdelkarim'};

  myNumber = 1250.3454;

  myPercent = 0.5;

  myBirthday = new Date();

  show = false;

  numberArray = [1, 3, 4 , 6];

  @HostListener('click') onClickCallHostListener() {
    console.log('Clicked inside component');
  }

  constructor() { }

  ngOnInit() {
  }

  addNumber() {
    this.numberArray.push(8);
  }

}
