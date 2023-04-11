import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'White',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'White',
        })
      ),
      transition('open => closed', [animate('2s')]),
      transition('closed => open', [animate('5s')]),
    ]),
  ],
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}

  ngOnInit() {}
}
