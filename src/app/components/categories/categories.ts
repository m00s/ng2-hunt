import {
  Directive,
  Component,
  Input,
  Output,
  EventEmitter
} from 'angular2/core';
//import {FORM_PROVIDERS} from 'angular2/common';

import {Hunter} from '../../services/hunter';

let catTemplate = require('./categories.html');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'categories',
  directives: [],
  styles: [],
  template:  catTemplate
})

export class Categories {
  categories: any;
  @Input() isAuthenticated: boolean;
  @Output() filterBy = new EventEmitter();

  constructor(private _hunter: Hunter) {}

  onInit () {
    if (this.isAuthenticated) {
      this.fetchCategories();
    }
  }

  fetchCategories() {
    this.categories = this._hunter.getCategories();
  }

  fireFilter(event, c) {
    this.filterBy.next({category: c});
  }
}

