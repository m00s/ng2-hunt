/// <reference path="../typings/_custom.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {MainComponent} from './main';

bootstrap(MainComponent)
  .catch(err => console.error(err));
