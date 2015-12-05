/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular Directives
 */
import {
  Directive,
  Component,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  Input,
  Output,
  EventEmitter
  } from 'angular2/angular2';

import {Hunter} from '../../services/hunter';

let catTemplate = require('./categories.html');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'categories',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  styles: [],
  template:  catTemplate
})

export class Categories {
  categories: any;
  @Input() isAuthenticated: boolean;
  @Output() filterBy = new EventEmitter();

  constructor(private _hunter: Hunter) {}

  onInit () {
    if(this.isAuthenticated){
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

