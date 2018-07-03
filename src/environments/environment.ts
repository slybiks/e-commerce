// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCz-sKE5MIjaybSw9VU8aD4uZLKOWICOQY",
    authDomain: "commerce-biks.firebaseapp.com",
    databaseURL: "https://commerce-biks.firebaseio.com",
    projectId: "commerce-biks",
    storageBucket: "commerce-biks.appspot.com",
    messagingSenderId: "327492572986"
  }
};
