/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular Directives
 */
import {Directive, Component, View, ElementRef, CORE_DIRECTIVES, FORM_DIRECTIVES, Output, EventEmitter} from 'angular2/angular2';

import {Session} from '../../services/session';
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
  isAuthenticated: boolean = false;
  categories: any;

  constructor(private _session: Session, private _hunter: Hunter) {}

  onInit () {
    this.isAuthenticated = this._session.isStarted;
  }

  onAuthenticate() {
    this.isAuthenticated = this._session.isStarted;
    //this.fetchCategories();
  }

  fetchCategories() {
    this.categories = this._hunter.getCategories();
  }
}

