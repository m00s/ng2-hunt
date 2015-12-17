import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Routes} from '../../../route.config';

import {Hunter} from '../../../services/hunter';

let postTemplate = require('./post.html');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'post',
  styles: [],
  template: postTemplate,
  directives: [ROUTER_DIRECTIVES]
})

export class Post {
  post: any;
  routes = Routes;

  constructor(private _routeParams: RouteParams, private _hunter: Hunter) {
  }

  onInit () {
    this._hunter
      .getPost(parseInt(this._routeParams.get('id'), 10))
      .subscribe(data => this.post = data);
  }

}

