/*
 * Angular 2 decorators and services
 */
import {Directive, Component, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers} from '@angular/http';

/*
 * App services
 */
import {Hunter} from '../../services/hunter';
import {Session} from '../../services/session';
import {Navbar} from '../navbar/navbar';
import {Categories} from '../categories/categories';
import {LoadingSpinnerDirective} from '../../commons/loading-spinner/loadingSpinner';
import {Observable} from "rxjs/Observable";
import {SearchPipe} from '../../commons/pipes/search.pipe';

let postsTemplate = require('./dashboard.html');

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'dashboard',
    directives: [Navbar, Categories, LoadingSpinnerDirective],
    styles: [],
    template:  postsTemplate,
    pipes: [SearchPipe]
})

export class Dashboard {

  isAuthenticated: boolean = false;
  isLoadingPost: boolean = false;
  searchPattern: string;
  posts: Observable<Array<any>>;

  constructor(private _hunter: Hunter, public session: Session, private router: Router) {}

  ngOnInit () {
    this.isAuthenticated = this.session.isStarted;
    if (this.isAuthenticated) {
      this.fetchPosts();
    }
  }

  fetchPosts(category?) {
    this.isLoadingPost = true;
    this._hunter.getPosts(category)
      .subscribe(
        (_posts) => {
          this.posts = _posts;
          this.isLoadingPost = false;
        },
        (err) => console.log(err)
      );
  }

  filterPosts(event) {
    if(event.pattern !== undefined && event.pattern !== this.searchPattern) {
      this.searchPattern = event.pattern;
    }
    else {
      this.fetchPosts(event.category ? event.category.slug : null);
    }
  }

  gotoDetail(postId) {
    this.router.navigate(['Post', {id: postId}]);
  }
}
