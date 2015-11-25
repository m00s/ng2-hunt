import {Injectable, Observable} from 'angular2/angular2';
import {Http, Headers, Response} from 'angular2/http';
import {Session} from './session';
import {Token} from './token';

const API_HOST = 'https://api.producthunt.com';
const POSTS_ROUTE = '/v1/posts';

@Injectable() export class Hunter {
  token: Token;

  constructor(public http: Http, public _token: Token) {
    this.token = _token;
  }

  fetch() {
    const JSON_HEADERS = new Headers({
      'Authorization': 'Bearer ' + this.token.get()
    });

    return this.http
      .get(`${API_HOST}${POSTS_ROUTE}`, { headers: JSON_HEADERS })
      .map((res: Response) => res.json())
      .map(res => res['posts']);
  }

  getPost(id) {
    const JSON_HEADERS = new Headers({
      'Authorization': 'Bearer ' + this.token.get()
    });

    return this.http
      .get(`${API_HOST}${POSTS_ROUTE}/${id}`, { headers: JSON_HEADERS })
      .map((res: Response) => res.json())
      .map(res => res['post']);
  }
}
