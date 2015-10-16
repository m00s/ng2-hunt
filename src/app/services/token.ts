import {Injectable} from 'angular2/angular2';


@Injectable() export class Token {
  token: string;

  constructor() {}

  get() {
    return this.token;
  }

  set(t) {
    this.token = t;
  }
}
