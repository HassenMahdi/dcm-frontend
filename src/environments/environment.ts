// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { meta } from './environment.meta';

export const environment = {
  ...meta,
  production: false,
  test: false,
  import: 'http://13.36.203.148:5001/import/v2/',
  mapping: 'http://13.36.203.148:5003/mapping',
  cleansing: 'http://13.36.203.148:5004/check',
  transform: 'http://13.36.203.148:5002/transfo/',
  admin: 'http://13.36.203.148:5000/',
  upload: 'http://13.36.203.148:5005/upload/',
  auth: 'http://13.36.203.148:5010/',
  pipeline: 'http://13.36.203.148:5006/',

  env: 'DEV',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
