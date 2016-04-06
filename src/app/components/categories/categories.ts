import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {Hunter} from '../../services/hunter';

let catTemplate = require('./categories.html');

@Component({
  selector: 'categories',
  directives: [],
  styles: [],
  template:  catTemplate
})

export class Categories {
  categories: any;
  activeCategory: any;
  @Input() isAuthenticated: boolean;
  @Output() filterBy = new EventEmitter();

  constructor(private _hunter: Hunter) {}

  ngOnInit () {
    if (this.isAuthenticated) {
      this.fetchCategories();
    }
  }

  fetchCategories() {
    this.categories = this._hunter.getCategories();
  }

  onFilter(event, c) {
    if (this.activeCategory !== c) {
      this.filterBy.emit({category: c});
      this.activeCategory = c;
    }
  }
}

