import {Injectable, Inject} from 'angular2/core';
import {PHKEYS} from '../../platform/environment';

@Injectable() export class Token {
  token: string;
  devMode: boolean = true;

  constructor(@Inject(PHKEYS) private _KEYS) {
    this.token = localStorage.getItem('token');
  }

  get() {
    return this.devMode ?
      this._KEYS.devToken : this.token;
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
