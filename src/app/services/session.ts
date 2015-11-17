import {Injectable} from 'angular2/angular2';
import {Http, Headers, RequestOptionsArgs, Response} from 'angular2/http';
import {Token} from './token';

const API_HOST = 'https://api.producthunt.com';
const TOKEN_ROUTE = '/v1/oauth/token';
const AUTHORIZATION_ROUTE = '/v1/oauth/authorize';

@Injectable() export class Session {

  token: Token;

  constructor(public http: Http, public _token: Token) {
    this.token = _token;
  }

  start(urlToken) {
    this.token.set(urlToken);
    console.info('Token saved:',urlToken);
  }

  authorize(isPublic) {
    if(isPublic) {
      console.log('Authorizing Client');
      this.CCFlow();
    }
    else {
      console.log('Authorizing user');
      this.UAFlow();
    }
  }

  /*
   *
   * Start a user authentication oAuth authorization
   *
   */

  UAFlow() {
    window.location.href = `${API_HOST}${AUTHORIZATION_ROUTE}?client_id=e5969a47d2d1c5edeecca1d718d23c1d2efad8cf3f96049e1ce2bbd3843cebc3&redirect_uri=http%3A%2F%2Flocalhost.com%3A3000&response_type=code&scope=public+private`;
  }

  /*
  *
  * Start a client credential oAuth authorization
  *
  */

  CCFlow() {
    var JSON_HEADERS = new Headers();

    JSON_HEADERS.append('Accept', 'application/json');
    //JSON_HEADERS.append('Content-Type', 'application/json');

    const BODY = JSON.stringify({
      "client_id" : "e5969a47d2d1c5edeecca1d718d23c1d2efad8cf3f96049e1ce2bbd3843cebc3",
      "client_secret" : "02bcd19bc72549a4ea87370ed08e3f946c9e631ecea16b3c331c470ebefabe3a",
      "grant_type" : "client_credentials"
    });

    this.http
      .post(`${API_HOST}${TOKEN_ROUTE}`, BODY, { headers: JSON_HEADERS })
      .map((res:Response) => res.json())
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

