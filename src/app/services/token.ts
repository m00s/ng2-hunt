import {Injectable} from 'angular2/angular2';

@Injectable() export class Token {
  token: string;
  devMode: boolean = true;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  get() {
    return this.devMode ? 'e547885fb029f64753913167564dee312dc60a20a408f290af5be9609b91c75b' : this.token;
  }

  set(t) {
    this.token = t;
    if(typeof(Storage) !== "undefined") {
      localStorage.setItem('token', t);
    }
  }
}
