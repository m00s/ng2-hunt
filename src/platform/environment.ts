// Angular 2 browser
import {
  ELEMENT_PROBE_PROVIDERS,
  ELEMENT_PROBE_PROVIDERS_PROD_MODE
} from 'angular2/platform/browser';

// Angular 2
import {enableProdMode, provide, OpaqueToken} from 'angular2/core';

export const PHKEYS = new OpaqueToken('app.config');

// Environment Providers
let PROVIDERS = [];

if ('production' === ENV) {
  // Production
  enableProdMode();

  PROVIDERS = [
    ...PROVIDERS,
    ELEMENT_PROBE_PROVIDERS_PROD_MODE
  ];

} else {
  // Development
  PROVIDERS = [
    ...PROVIDERS,
    ELEMENT_PROBE_PROVIDERS
  ];

}

export const ENV_PROVIDERS = [
  ...PROVIDERS,
  provide(PHKEYS, { useValue: require('../../keys.secret.json') })
];
