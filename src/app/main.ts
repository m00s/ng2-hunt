import {Component, provide} from 'angular2/core';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {FORM_PROVIDERS} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  RouterOutlet,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';


import {Hunter} from './services/hunter';
import {Session} from './services/session';
import {Token} from './services/token';
import {Dashboard} from './components/dashboard/dashboard';
import {Post} from './components/post/post';

// Global styles
import './styles/style.scss';

@Component({
  selector: 'ngHunt',
  directives: [RouterOutlet],
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
@RouteConfig([{
    path: '/',
    name: 'Home',
    redirectTo: ['Dashboard']
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    useAsDefault: true
  }, {
    path: '/post/:id',
    name: 'Post',
    component: Post
  }
])
export class MainComponent { }
