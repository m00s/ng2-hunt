import {Injectable} from 'angular2/di';
import {Http, Headers} from 'angular2/http';

@Injectable() export class Session {

  constructor(public http: Http) {}

  start() {
    const BASE_URL = 'https://api.producthunt.com';
    const AUTH_ROUTE = '/v1/oauth/token';
    const JSON_HEADERS = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Host': 'https://api.producthunt.comapplication/json'
    });

    const BODY = JSON.stringify({
      'client_id' : 'e5969a47d2d1c5edeecca1d718d23c1d2efad8cf3f96049e1ce2bbd3843cebc3',
      'client_secret' : '02bcd19bc72549a4ea87370ed08e3f946c9e631ecea16b3c331c470ebefabe3a',
      'grant_type' : 'client_credentials'
    });

    this.http
      .post(BASE_URL + AUTH_ROUTE, BODY, JSON_HEADERS)
      .toRx()
      .map(res => res.json())
      .subscribe(
        data => this.serverData(data),
        err  => this.errorMessage(err)
      );
  }

  serverData(data) {
    console.log('data', data);
  }

  errorMessage(err) {
    console.error(err);
  }
}

