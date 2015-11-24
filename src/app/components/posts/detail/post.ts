/// <reference path="../../../../typings/_custom.d.ts" />

import {Component} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
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
  template: postTemplate
})

export class Post {

  post: any;

  constructor(private _routeParams: RouteParams, private _hunter: Hunter) {}

  onInit () {
    this._hunter
      .getPost(parseInt(this._routeParams.get('id'), 10))
      .subscribe(data => this.post = data);
  }

}

