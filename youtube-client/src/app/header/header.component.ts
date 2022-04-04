import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ytc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  constructor() { }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["ngOnInit"] }] */
  ngOnInit(): void {
  }
}
