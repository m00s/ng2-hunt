/// <reference path="../../../../typings/_custom.d.ts" />

import {Component} from 'angular2/angular2';

let postTemplate = require('./single.post.html');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'singlePost',
  styles: [],
  template: postTemplate
})

export class SinglePost {

  constructor() {}

  onInit () {}

}

