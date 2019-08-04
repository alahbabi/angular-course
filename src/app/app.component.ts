import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';
  show = false;
  number = 5 ;

  done(e) {
    console.log(e)
  }
}
