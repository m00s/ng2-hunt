import {Injectable} from 'angular2/angular2';
import {Http, Headers, RequestOptionsArgs} from 'angular2/http';
import {Token} from './token';

@Injectable() export class Session {

  token: Token;

  constructor(public http: Http, public _token: Token) {
    this.token = _token;
  }

  start(isPublic) {

    let urlToken = this.getURLParam('code');

    if(urlToken) {
      this.token.set(urlToken);
      console.log('Saved token:',urlToken);
    }
    else {
      console.log('Authorizing');
      if(isPublic) {
        this.CCFlow();
      }
      else {
        this.UAFlow();
      }
    }
  }

  /*
   *
   * Start a user authentication oAuth authorization
   *
   */

  UAFlow() {
    let BASE_URL = 'https://api.producthunt.com';
    let TOKEN_ROUTE = '/v1/oauth/token';
    let AUTHORIZATION_ROUTE = '/v1/oauth/authorize';

    window.location.href = BASE_URL + AUTHORIZATION_ROUTE + '?client_id=e5969a47d2d1c5edeecca1d718d23c1d2efad8cf3f96049e1ce2bbd3843cebc3&redirect_uri=http%3A%2F%2Flocalhost.com%3A3000&response_type=code&scope=public+private';
  }

  /*
  *
  * Start a client credential oAuth authorization
  *
  */

  CCFlow() {
    var JSON_HEADERS = new Headers();

    JSON_HEADERS.append('Accept', 'application/json');
    JSON_HEADERS.append('Content-Type', 'application/json');

    const BODY = JSON.stringify({
      "client_id" : "e5969a47d2d1c5edeecca1d718d23c1d2efad8cf3f96049e1ce2bbd3843cebc3",
      "client_secret" : "02bcd19bc72549a4ea87370ed08e3f946c9e631ecea16b3c331c470ebefabe3a",
      "grant_type" : "client_credentials"
    });

    this.http
      .post(BASE_URL + TOKEN_ROUTE, BODY, { headers: JSON_HEADERS })
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

  private getURLParam(param) {
    return decodeURIComponent((new RegExp('[?|&]' + param + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20')) || null
  }
}

