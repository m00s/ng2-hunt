/// <reference path="../../typings/_custom.d.ts" />

/*
 * Angular 2 decorators and services
 */
import {Directive, Component, View, ElementRef} from 'angular2/angular2';
import {RouteConfig, Router} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

/*
 * Angular Directives
 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';


/*
 * App services
 */
import {Hunter} from '../services/hunter';
import {Session} from '../services/session';

let appTemplate = require('./appHunter.html');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'appHunter',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  styles: [],
  template:  appTemplate
})

export class AppHunter {

  isAuthenticated: boolean = false;
  posts: any;

  constructor(public hunter: Hunter, public session: Session) {}

  onInit () {
    this.isAuthenticated = this.session.isStarted;
  }

  authenticate(isPublic) {
    this.session.authorize(isPublic);
  }

  fetchProducts() {
    this.posts = this.hunter.fetch();
  }
}

