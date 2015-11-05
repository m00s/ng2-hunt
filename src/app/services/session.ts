import {Injectable} from 'angular2/angular2';
import {Http, Headers, RequestOptionsArgs} from 'angular2/http';
import {Token} from './token';

@Injectable() export class Session {

  token: Token;

  constructor(public http: Http, public _token: Token) {
    this.token = _token;
  }

  start() {
    const BASE_URL = 'https://api.producthunt.com';
    const AUTH_ROUTE = '/v1/oauth/token';
    var JSON_HEADERS = new Headers();

    JSON_HEADERS.append('Accept', 'application/json');
    JSON_HEADERS.append('Content-Type', 'application/json');

    const BODY = JSON.stringify({
      "client_id" : "e5969a47d2d1c5edeecca1d718d23c1d2efad8cf3f96049e1ce2bbd3843cebc3",
      "client_secret" : "02bcd19bc72549a4ea87370ed08e3f946c9e631ecea16b3c331c470ebefabe3a",
      "grant_type" : "client_credentials"
    });

    this.http
      .post(BASE_URL + AUTH_ROUTE, BODY, { headers: JSON_HEADERS })
      .map(res => res.json())
      .subscribe(
        data => this.serverData(data),
        err  => this.errorMessage(err)
      );
  }

  serverData(data) {
    console.log('data', data);
    this.token.set(data.token);
  }

  errorMessage(err) {
    console.error(err);
  }
}

