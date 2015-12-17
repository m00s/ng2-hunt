import {Dashboard} from './components/posts/dashboard.ts';
import {Post} from './components/posts/detail/post.ts';
import {RouteDefinition} from 'angular2/router';

export const Routes = {
  home: {
    path: '/',
    name: 'Home',
    redirectTo: '/dashboard',
    link: ['/home']
  },
  dashboard: {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    link: ['/dashboard']
  },
  detail: {
    path: '/post/:id',
    name: 'Post',
    component: Post,
    link: ['/post']
  }
};

export const APP_ROUTES: RouteDefinition[] =
  Object.keys(Routes).map((name) => Routes[name]);
