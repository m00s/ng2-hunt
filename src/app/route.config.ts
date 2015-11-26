/// <reference path="../typings/_custom.d.ts" />
import {Dashboard} from './components/posts/dashboard.ts';
import {Post} from './components/posts/detail/post.ts';
import {RouteDefinition} from 'angular2/router';

export const Routes = {
  home: {
    path: '/',
    as: 'Home',
    redirectTo: '/dashboard',
    link: ['/home']
  },
  dashboard: {
    path: '/dashboard',
    as: 'Dashboard',
    component: Dashboard,
    link: ['/dashboard']
  },
  detail: {
    path: '/post/:id',
    as: 'Post',
    component: Post,
    link: ['/post']
  }
};

export const APP_ROUTES: RouteDefinition[] =
  Object.keys(Routes).map((name) => Routes[name]);
