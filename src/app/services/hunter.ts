import {Injectable, Observable} from 'angular2/angular2';
import {Http, Headers, Response} from 'angular2/http';
import {Session} from './session';
import {Token} from './token';

const API_HOST = 'https://api.producthunt.com';
const POSTS_ROUTE = '/v1/posts';
const CATEGORIES_ROUTE = '/v1/categories';

@Injectable() export class Hunter {
  _token: Token;

  constructor(public http: Http, private token: Token) {
    this._token = token;
  }

  buildHeaders() {
    return new Headers({
      'Authorization': 'Bearer ' + this._token.get()
    });
  }

  getPosts(category?) {
    var param = category ? `/all?search[category]=${category}` : '';
    return this.http
      .get(`${API_HOST}${POSTS_ROUTE}${param}`, { headers: this.buildHeaders() })
      .map((res: Response) => res.json())
      .map(res => res['posts']);
  }

  getCategories() {
    return this.http
      .get(`${API_HOST}${CATEGORIES_ROUTE}`, { headers: this.buildHeaders() })
      .map((res: Response) => res.json())
      .map(res => res['categories']);
  }

  getPost(id) {
    return this.http
      .get(`${API_HOST}${POSTS_ROUTE}/${id}`, { headers: this.buildHeaders() })
      .map((res: Response) => res.json())
      .map(res => res['post']);
  }
}
