import {Injectable} from 'angular2/core';

@Injectable() export class Token {
  token: string;
  devMode: boolean = true;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  get() {
    return this.devMode ?
      'e547885fb029f64753913167564dee312dc60a20a408f290af5be9609b91c75b' : this.token;
  }

  set(t) {
    this.token = t;
    if (this.isLocalStorageSupported()) {
      localStorage.setItem('token', t);
    }
  }

  destroy() {
    this.set(null);
    if (this.isLocalStorageSupported()) {
      localStorage.clear();
    }
  }

  private isLocalStorageSupported() {
    return typeof(Storage) !== 'undefined';
  }
}
