/*
 * Angular 2 decorators and services
 */
import {Directive, Component, ElementRef, Output, EventEmitter} from '@angular/core';
import {Http, Headers} from '@angular/http';

/*
 * Angular Directives
 */
import {FORM_PROVIDERS} from '@angular/common';

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
  directives: [],
  styles: [],
  template:  navTemplate
})

export class Navbar {
  @Output() refresh = new EventEmitter();

  isAuthenticated: boolean = false;

  constructor(public session: Session) {}

  ngOnInit () {
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
