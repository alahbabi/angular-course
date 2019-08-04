import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  myColor = '#080';

  myText = 'my Text';

  myObject = {name: 'Abdelkarim'};

  myNumber = 1250.3454;

  myPercent = 0.5;

  myBirthday = new Date();

  show = false;

  showForm = false;

  showObs = false;

  numberArray = [1, 3, 4 , 6];

  name;

  email;

  myArr: Array<number> = [];

  myO = Observable.create( (observer: Observer<string>) => {
    setTimeout(() => {
      observer.next('Hello');
    }, 1000);
    setTimeout(() => {
      observer.error('error');
    }, 4000);
    setTimeout(() => {
      observer.complete();
    }, 6000);
  });


  myOTwo = Observable.create( (observer: Observer<string>) => {
    setInterval(() => {
      observer.next('Hello');
    }, 1000);
  });

  myOThree: Observable<Array<number>> = Observable.create( (observer: Observer<Array<number>>) => {
    let arr = [];
    setInterval(() => {
      arr.push(arr.length);
      observer.next(arr);
    }, 1000);
  });

  mySub: Subscription;

  @HostListener('click') onClickCallHostListener() {
    console.log('Clicked inside component');
  }

  constructor() { }

  ngOnInit() {
    this.myO.subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('complete');
    });

    this.mySub = this.myOTwo.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.mySub.unsubscribe();
  }

  addNumber() {
    this.numberArray.push(8);
  }

  onSubmit(f) {
    console.log(f);
  }

  reset(f: NgForm) {
    f.setValue({
        user : ({
          name: 'name',
          email: 'email'
        })
    });
  }
}
