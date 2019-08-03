import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log('snapshot ' + this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe(params => console.log('paramMap.subscribe ' + params.get('id')));
    this.route.queryParamMap.subscribe(params => console.log('queryParamMap.subscribe ' + params.get('id')));
  }

  ngOnInit() {
  }

}
