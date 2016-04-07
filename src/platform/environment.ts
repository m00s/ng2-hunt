
// Angular 2
import {enableProdMode, provide, OpaqueToken} from 'angular2/core';

export const PHKEYS = new OpaqueToken('app.config');

// Environment Providers
let PROVIDERS = [];

if ('production' === ENV) {
  // Production
  enableProdMode();

  PROVIDERS = [
    ...PROVIDERS
  ];

} else {
  // Development
  PROVIDERS = [
    ...PROVIDERS
  ];

}

export const ENV_PROVIDERS = [
  ...PROVIDERS,
  provide(PHKEYS, { useValue: require('../../keys.secret.json') })
];
