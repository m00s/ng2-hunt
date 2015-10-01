/// <reference path="../typings/_custom.d.ts" />

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


let appTemplate = require('./app.html');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app'
})
@View({
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  styles: [],
  template:  appTemplate
})
export class App {
  title: string;
  data: Array<any> = [];
  constructor(public http: Http) {
    this.title = 'Angular 2';
  }

  onInit() {

    const BASE_URL = 'http://localhost:3001';
    const TODO_API_URL = '/api/todos';
    const JSON_HEADERS = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    this.http
      .get(BASE_URL + TODO_API_URL, {
        headers: JSON_HEADERS
      })
      .toRx()
      .map(res => res.json())
      .subscribe(
        // onNext callback
        data => this.serverData(data),
        // onError callback
        err  => this.errorMessage(err)
      );//end http

  }

  serverData(data) {
    console.log('data', data);
    this.data = data;
  }

  errorMessage(err) {
    console.info(`${'\n'
      } // You must run these commands for the Http API to work in another process ${'\n'
      } npm run express-install ${'\n'
      } npm run express
    `);
    console.error(err);
  }

}

