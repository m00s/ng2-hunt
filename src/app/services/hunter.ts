import {Injectable} from 'angular2/di';
import {Http, Headers} from 'angular2/http';
import {Session} from './session';

@Injectable() export class Hunter {
  products: Array<any> = [];
  constructor(public http: Http) {}

  onInit() {

    const BASE_URL = 'http://localhost:3001';
    const PRODUCTS_API_URL = '/api/products';
    const JSON_HEADERS = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    this.http
      .get(BASE_URL + PRODUCTS_API_URL, {
        headers: JSON_HEADERS
      })
      .toRx()
      .map(res => res.json())
      .subscribe(
          data => this.serverData(data),
          err  => this.errorMessage(err)
      );
  }

  getData() {
    return 'Data';
  }

  serverData(data) {
    console.log('data', data);
    this.products = data;
  }

  errorMessage(err) {
    console.error(err);
  }
}
