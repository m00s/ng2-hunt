/// <reference path="../typings/_custom.d.ts" />
import {PostList} from './components/posts/post.list.ts';
import {SinglePost} from './components/posts/detail/single.post';
import {RouteDefinition} from 'angular2/router';

export const Routes = {
  posts: {
    path: '/',
    as: 'PostList',
    component: PostList,
    link: ['/Posts', '/']
  },
  detail: {
    path: '/post/:id',
    as: 'Detail',
    component: SinglePost,
    link: ['/Detail']
  }
};

export const APP_ROUTES: RouteDefinition[] =
  Object.keys(Routes).map((name) => Routes[name]);
