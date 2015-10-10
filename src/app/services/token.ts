import {Injectable} from 'angular2/di';


@Injectable() export class Token {
  constructor() {
  }

  get() {
    return this.token;
  }

  set(t) {
    this.token = t;
  }
}
