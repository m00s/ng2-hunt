/*
 * Angular 2 decorators and services
 */
import {Directive, Component, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

/*
 * App services
 */
import {Hunter} from '../../services/hunter';
import {Session} from '../../services/session';
import {Navbar} from '../navbar/navbar';
import {Categories} from '../categories/categories';
import {LoadingSpinnerDirective} from '../../commons/loading-spinner/loadingSpinner';
import {Observable} from "rxjs/Observable";

let postsTemplate = require('./dashboard.html');

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'dashboard',
    directives: [Navbar, Categories, LoadingSpinnerDirective],
    styles: [],
    template:  postsTemplate
})

export class Dashboard {

  isAuthenticated: boolean = false;
  posts: Observable<Array<any>>;

  constructor(public hunter: Hunter, public session: Session, private router: Router) {}

  ngOnInit () {
    this.isAuthenticated = this.session.isStarted;
    if (this.isAuthenticated) {
      this.fetchPosts();
    }
  }

  fetchPosts(category?) {
    this.posts = this.hunter.getPosts(category);
  }

  filterPosts(event, c) {
    this.fetchPosts(c);
  }

  gotoDetail(postId) {
    this.router.navigate(['Post', {id: postId}]);
  }
}
