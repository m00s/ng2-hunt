import {Injectable} from 'angular2/angular2';
import {Http, Headers, Response} from 'angular2/http';
import {Session} from './session';
import {Token} from './token';


@Injectable() export class Hunter {
  token: Token;
  posts: Array<any> = [];

  constructor(public http: Http, public _token: Token) {
    this.token = _token;
  }

  fetch() {

    const BASE_URL = 'https://api.producthunt.com';
    const POST_API_URL = '/v1/posts';
    const JSON_HEADERS = new Headers({
      'Authorization': 'Bearer ' + this.token.get()
    });

    this.http
      .get(BASE_URL + POST_API_URL, { headers: JSON_HEADERS })
      .map((res: Response) => res.json())
      .subscribe(
          data => this.serverData(data),
          err  => this.errorMessage(err)
      );
  }

  serverData(data) {
    console.log('data', data);
    this.posts = data;
  }

  errorMessage(err) {
    console.error(err);
  }
}
