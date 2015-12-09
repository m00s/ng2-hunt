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


/*
 * App services
 */
import {Hunter} from '../../services/hunter';
import {Session} from '../../services/session';
import {Navbar} from '../navbar/navbar';
import {Categories} from '../categories/categories';

let postsTemplate = require('./dashboard.html');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'dashboard',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, Navbar, Categories],
  styles: [],
  template:  postsTemplate,
})

export class Dashboard {

  isAuthenticated: boolean = false;
  posts: any;

  constructor(public hunter: Hunter, public session: Session, private router: Router) {}

  onInit () {
    this.isAuthenticated = this.session.isStarted;
    if(this.isAuthenticated) {
      this.fetchPosts();
    }
  }

  fetchPosts() {
    this.posts = this.hunter.getPosts();
  }

  filterPosts(event, c) {
    this.posts = this.hunter.getPosts(event.category.slug);
  }

  gotoDetail(postId) {
    this.router.navigate(['/Post', {id: postId}]);
  }
}

