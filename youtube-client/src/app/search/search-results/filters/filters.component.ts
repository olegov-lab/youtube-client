import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ytc-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  constructor() { }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["ngOnInit"] }] */
  ngOnInit(): void {
  }
}

export default FiltersComponent;
