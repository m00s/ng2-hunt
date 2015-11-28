/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular 2 decorators and services
 */
import {Directive, Component, View, ElementRef} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';

/*
 * Angular Directives
 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES, Output, EventEmitter} from 'angular2/angular2';


/*
 * App services
 */
import {Session} from '../../services/session';

let navTemplate = require('./navbar.html');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'navbar',
  directives: [ CORE_DIRECTIVES],
  styles: [],
  template:  navTemplate
})

export class Navbar {
  @Output() refresh = new EventEmitter();

  isAuthenticated: boolean = false;

  constructor(public session: Session) {}

  onInit () {
    this.isAuthenticated = this.session.isStarted;
  }

  authenticate(isPublic) {
    this.session.authorize(isPublic);
  }

  logout() {
    this.session.end();
    this.isAuthenticated = this.session.isStarted;
  }

  fireRefresh() {
    this.refresh.next(null);
  }
}

