import {Component, provide} from 'angular2/core';

import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  RouterOutlet
} from 'angular2/router';


import {Hunter} from './services/hunter';
import {Session} from './services/session';
import {Token} from './services/token';
import {Dashboard} from './components/dashboard/dashboard';
import {Post} from './components/post/post';

// Global styles
import '../assets/styles/style.scss';

@Component({
  selector: 'ngHunt',
  directives: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  providers: [
    ROUTER_PROVIDERS,
    ROUTER_PROVIDERS,
    Hunter,
    Session,
    Token
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
