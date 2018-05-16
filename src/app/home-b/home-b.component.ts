import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.component.html',
  styleUrls: ['./home-a.component.css']
})
export class HomeAComponent implements OnInit {
  name: string;
  constructor() {
  	this.name = 'Home B';
  }

  ngOnInit() {
  }

}
