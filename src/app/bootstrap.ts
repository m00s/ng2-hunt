import {bootstrap} from 'angular2/platform/browser';
import {MainComponent} from './main';

bootstrap(MainComponent)
  .catch(err => console.error(err));
