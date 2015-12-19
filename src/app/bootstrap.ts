import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {MainComponent} from './main';

bootstrap(MainComponent)
  .catch(err => console.error(err));
