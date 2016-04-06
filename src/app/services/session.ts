import {Injectable, Inject} from '@angular/core';
import {PHKEYS} from '../../platform/environment';
import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {Token} from './token';

const API_HOST = 'https://api.producthunt.com';
const TOKEN_ROUTE = '/v1/oauth/token';
const AUTHORIZATION_ROUTE = '/v1/oauth/authorize';

@Injectable()
export class Session {

  public isStarted: boolean = false;
  private _token: Token;

  constructor(public http: Http, public token: Token, @Inject(PHKEYS) private _KEYS) {
    this._token = token;

    const t = this._token.get() || this.getURLParam('code');
    if (t) {
      this.start(t);
    }
  }

  start(token) {
    if (!this.isStarted) {
      this._token.set(token);
      this.isStarted = true;
      console.info('Session started with token:', token);
    }
  }

  end() {
    if (this.isStarted) {
      this._token.destroy();
      this.isStarted = false;
      console.info('Session closed');
    }
  }

  authorize(isPublic) {
    if (isPublic) {
      console.log('Authorizing - Client Credentials');
      this.CCFlow();
    } else {
      console.log('Authorizing - User Authentication');
      this.UAFlow();
    }
  }

  /*
   *
   * Start a user authentication oAuth authorization
   *
   */

  UAFlow() {
    window.location.href = `${API_HOST}${AUTHORIZATION_ROUTE}` +
    `?client_id=${this._KEYS.apiKey}&` +
    `redirect_uri=http%3A%2F%2Flocalhost.com%3A3000&response_type=code&scope=public+private`;
  }

  /*
  *
  * Start a client credential oAuth authorization
  *
  */

  CCFlow() {
    var JSON_HEADERS = new Headers();

    JSON_HEADERS.append('Accept', 'application/json');

    const BODY = JSON.stringify({
      'client_id' : this._KEYS.apiKey,
      'client_secret' : this._KEYS.apiSecret,
      'grant_type' : 'client_credentials'
    });

    this.http
      .post(`${API_HOST}${TOKEN_ROUTE}`, BODY, { headers: JSON_HEADERS })
      .map((res: Response) => res.json())
      .subscribe(
        data => this.serverData(data),
        err  => this.errorMessage(err)
    );
  }

  serverData(data) {
    console.log('data', data);
    this._token.set(data.token);
  }

  errorMessage(err) {
    console.error(err);
  }

  private getURLParam(param) {
    return decodeURIComponent(
        (new RegExp('[?|&]' + param + '=' + '([^&;]+?)(&|#|;|$)')
          .exec(location.search) || [, ''])[1]
          .replace(/\+/g, '%20')) || null;
  }
}
