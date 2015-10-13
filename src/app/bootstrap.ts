/// <reference path="../typings/_custom.d.ts" />

// Angular 2
import {bootstrap} from 'angular2/angular2';
/*
 * Bindings provided by Angular
 */
import {FORM_PROVIDERS} from 'angular2/angular2'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/src/core/debug';
import {HTTP_PROVIDERS} from 'angular2/http';

/*
 * Custom services
 */
import {Hunter} from './services/hunter';
import {Session} from './services/session';
import {Token} from './services/token';


/*
 * App Component
 * our top level component that holds all of our components
 */
import {AppHunter} from './components/appHunter';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Bindings into Angular's dependency injection
 */
bootstrap(AppHunter, [
  // These are dependencies of our App
  FORM_PROVIDERS,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  ELEMENT_PROBE_PROVIDERS,
  Hunter,
  Session,
  Token
]);
