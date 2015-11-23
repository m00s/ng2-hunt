/// <reference path="../../../../typings/_custom.d.ts" />

import {Component} from 'angular2/angular2';

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

  constructor() {}

  onInit () {}

}

