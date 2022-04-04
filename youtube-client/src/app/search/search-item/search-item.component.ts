import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ytc-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  constructor() { }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["ngOnInit"] }] */
  ngOnInit(): void {
  }
}

export default SearchItemComponent;
