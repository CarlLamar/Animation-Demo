import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
  ],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  ngOnInit() {}
}
