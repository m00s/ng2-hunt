/// <reference path="../../../typings/_custom.d.ts" />

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
import {Hunter} from '../../services/hunter';
import {Session} from '../../services/session';

let postsTemplate = require('./post.list.html');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'postList',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  styles: [],
  template:  postsTemplate,
})

export class PostList {

  isAuthenticated: boolean = false;
  posts: any;

  constructor(public hunter: Hunter, public session: Session) {}

  onInit () {
    this.isAuthenticated = this.session.isStarted;
    if(this.isAuthenticated) {
      this.fetchProducts();
    }
  }

  authenticate(isPublic) {
    this.session.authorize(isPublic);
  }

  logout() {
    this.session.end();
    this.isAuthenticated = this.session.isStarted;
  }

  fetchProducts() {
    this.posts = this.hunter.fetch();
  }
}

