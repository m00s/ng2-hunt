# ng2 - Product Hunt

This is a sample project to hack with the [Product Hunt api](https://api.producthunt.com/v1/docs) and have fun with the [Angular 2 beta](https://www.npmjs.com/package/angular2).

Copyright © 2016, [Massimiliano Sartoretto](mailto:massimilianosartoretto@gmail.com)

Find me on:
[![alt text][1.1]][1]
[![alt text][2.1]][2]
[![alt text][6.1]][6]

[1.1]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)
[2.1]: http://i.imgur.com/P3YfQoD.png (facebook icon with padding)
[6.1]: http://i.imgur.com/0o48UoR.png (github icon with padding)

[1]: http://www.twitter.com/___Sarto
[2]: http://www.facebook.com/profile.php?id=1549402605
[6]: http://www.github.com/m00s

Installation
------------

This project is based on the awesome [angular2-webpack-starter](https://github.com/angular-class/angular2-webpack-starter).

Clone this repo, `npm  i` to resolve dependencies
and `npm run` to start a webserver listening on `http://localhost:3000`.

### Important
Since this app uses the [Product Hunt api](https://api.producthunt.com/v1/docs) you need to provide your own keys to run the code.
In the `src/platform/environment.ts` file you can find the `PHKEYS` constant that provides api keys application wide (by default it looks for a `keys.secret.json` in the root directory).

Edit that code to provide your own credentials, the json structure should follow this syntax:

```
{
  "apiKey": "<your-awesome-api-key>",
  "apiSecret": "<your-awesome-api-secret>",
  "devToken": "<your-awesome-dev-token>"
}

```

Contributing
------------
The only goal of this project is to learn new stuff about Angular 2, if you learn something cool and would like to share please submit a PR.
