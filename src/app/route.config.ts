/// <reference path="../typings/_custom.d.ts" />
import {PostList} from './components/posts/post.list.ts';
import {SinglePost} from './components/posts/detail/single.post';
import {RouteDefinition} from 'angular2/router';

export const Routes = {
  posts: {
    path: '/',
    as: 'Posts',
    component: PostList,
    link: ['/posts', '/']
  },
  detail: {
    path: '/post/:id',
    as: 'Detail',
    component: SinglePost,
    link: ['/detail']
  }
};

export const APP_ROUTES: RouteDefinition[] =
  Object.keys(Routes).map((name) => Routes[name]);
