/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular Directives
 */
import {Directive, Component, View, ElementRef, CORE_DIRECTIVES, FORM_DIRECTIVES, Output, EventEmitter} from 'angular2/angular2';

import {Session} from '../../services/session';

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

export class Navbar {
  @Output() refresh = new EventEmitter();

  isAuthenticated: boolean = false;

  constructor(public session: Session) {}

  onInit () {
    this.isAuthenticated = this.session.isStarted;
  }

  fireRefresh() {
    this.refresh.next(null);
  }

  onAuthenticate() {
    this.isAuthenticated = this.session.isStarted;
  }
}

