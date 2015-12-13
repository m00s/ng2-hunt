import {Component, provide} from 'angular2/core';
import {FORM_PROVIDERS, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {HTTP_PROVIDERS} from 'angular2/http';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';


import {Hunter} from './services/hunter';
import {Session} from './services/session';
import {Token} from './services/token';

@Component({
  selector: 'ngHunt',
  directives: [ROUTER_DIRECTIVES],
  template: `<router-outlet></router-outlet>`,
  providers: [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    ELEMENT_PROBE_PROVIDERS,
    ROUTER_PROVIDERS,
    Hunter,
    Session,
    Token,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
  ]
})

@RouteConfig(APP_ROUTES)
export class MainComponent {
  routes = Routes;
}
