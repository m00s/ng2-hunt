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
 *
 */
import {Hunter} from '../services/hunter';
import {Session} from '../services/session';

let appTemplate = require('./appHunter.html');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'appHunter'
})

@View({
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  styles: [],
  template:  appTemplate
})

export class AppHunter {
  title: string;

  constructor(public hunter: Hunter, public session: Session) {
    this.title = 'Angular Hunter';

    session.start(false);
  }
}

