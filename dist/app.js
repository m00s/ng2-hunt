webpackJsonp([2,0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(321);
	module.exports = __webpack_require__(425);


/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(10);
	var Token = (function () {
	    function Token() {
	    }
	    Token.prototype.get = function () {
	        return this.token;
	    };
	    Token.prototype.set = function (t) {
	        this.token = t;
	    };
	    Token = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Token);
	    return Token;
	})();
	exports.Token = Token;


/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(10);
	var http_1 = __webpack_require__(63);
	var token_1 = __webpack_require__(151);
	var Hunter = (function () {
	    function Hunter(http, _token) {
	        this.http = http;
	        this._token = _token;
	        this.posts = [];
	        this.token = _token;
	    }
	    Hunter.prototype.fetch = function () {
	        var _this = this;
	        var BASE_URL = 'https://api.producthunt.com';
	        var POST_API_URL = '/v1/posts';
	        var JSON_HEADERS = new http_1.Headers({
	            'Authorization': 'Bearer ' + this.token.get()
	        });
	        this.http
	            .get(BASE_URL + POST_API_URL, { headers: JSON_HEADERS })
	            .map(function (res) { return res.json(); })
	            .subscribe(function (data) { return _this.serverData(data); }, function (err) { return _this.errorMessage(err); });
	    };
	    Hunter.prototype.serverData = function (data) {
	        console.log('data', data);
	        this.posts = data;
	    };
	    Hunter.prototype.errorMessage = function (err) {
	        console.error(err);
	    };
	    Hunter = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, token_1.Token])
	    ], Hunter);
	    return Hunter;
	})();
	exports.Hunter = Hunter;


/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(10);
	var http_1 = __webpack_require__(63);
	var token_1 = __webpack_require__(151);
	var Session = (function () {
	    function Session(http, _token) {
	        this.http = http;
	        this._token = _token;
	        this.token = _token;
	    }
	    Session.prototype.start = function (isPublic) {
	        var urlToken = this.getURLParam('code');
	        if (urlToken) {
	            this.token.set(urlToken);
	            console.log('Saved token:', urlToken);
	        }
	        else {
	            console.log('Authorizing');
	            if (isPublic) {
	                this.CCFlow();
	            }
	            else {
	                this.UAFlow();
	            }
	        }
	    };
	    Session.prototype.UAFlow = function () {
	        window.location.href = Session.BASE_URL + Session.AUTHORIZATION_ROUTE + '?client_id=e5969a47d2d1c5edeecca1d718d23c1d2efad8cf3f96049e1ce2bbd3843cebc3&redirect_uri=http%3A%2F%2Flocalhost.com%3A3000&response_type=code&scope=public+private';
	    };
	    Session.prototype.CCFlow = function () {
	        var _this = this;
	        var JSON_HEADERS = new http_1.Headers();
	        JSON_HEADERS.append('Accept', 'application/json');
	        JSON_HEADERS.append('Content-Type', 'application/json');
	        var BODY = JSON.stringify({
	            "client_id": "e5969a47d2d1c5edeecca1d718d23c1d2efad8cf3f96049e1ce2bbd3843cebc3",
	            "client_secret": "02bcd19bc72549a4ea87370ed08e3f946c9e631ecea16b3c331c470ebefabe3a",
	            "grant_type": "client_credentials"
	        });
	        this.http
	            .post(Session.BASE_URL + Session.TOKEN_ROUTE, BODY, { headers: JSON_HEADERS })
	            .map(function (res) { return res.json(); })
	            .subscribe(function (data) { return _this.serverData(data); }, function (err) { return _this.errorMessage(err); });
	    };
	    Session.prototype.serverData = function (data) {
	        console.log('data', data);
	        this.token.set(data.token);
	    };
	    Session.prototype.errorMessage = function (err) {
	        console.error(err);
	    };
	    Session.prototype.getURLParam = function (param) {
	        return decodeURIComponent((new RegExp('[?|&]' + param + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
	    };
	    Session.BASE_URL = 'https://api.producthunt.com';
	    Session.TOKEN_ROUTE = '/v1/oauth/token';
	    Session.AUTHORIZATION_ROUTE = '/v1/oauth/authorize';
	    Session = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, token_1.Token])
	    ], Session);
	    return Session;
	})();
	exports.Session = Session;


/***/ },

/***/ 423:
/***/ function(module, exports) {

	module.exports = "<div class=\"page\">\n  <header>\n    <h1 class=\"title\">NG-2 Hunt</h1>\n  </header>\n\n  <div class=\"main-container\">\n\n    <h3> Authentication </h3>\n    <button class=\"md-button md-raised\" (click)=\"authenticate(true)\"> Client only</button>\n    <button class=\"md-button md-raised\" (click)=\"authenticate(false)\"> User </button>\n\n    <h3> Resources </h3>\n    <button class=\"md-button md-raised\" [disabled]=\"isAuthenticated\" (click)=\"fetchProducts()\"> Load Product List </button>\n\n  </div>\n</div>\n"

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/_custom.d.ts" />
	var angular2_1 = __webpack_require__(10);
	var router_1 = __webpack_require__(104);
	var http_1 = __webpack_require__(63);
	var hunter_1 = __webpack_require__(319);
	var session_1 = __webpack_require__(320);
	var token_1 = __webpack_require__(151);
	var appHunter_1 = __webpack_require__(426);
	angular2_1.bootstrap(appHunter_1.AppHunter, [
	    angular2_1.FORM_PROVIDERS,
	    router_1.ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    angular2_1.ELEMENT_PROBE_PROVIDERS,
	    hunter_1.Hunter,
	    session_1.Session,
	    token_1.Token
	])
	    .catch(function (err) { return console.error(err); });


/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/_custom.d.ts" />
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(10);
	var angular2_2 = __webpack_require__(10);
	var router_1 = __webpack_require__(104);
	var hunter_1 = __webpack_require__(319);
	var session_1 = __webpack_require__(320);
	var appTemplate = __webpack_require__(423);
	var AppHunter = (function () {
	    function AppHunter(hunter, session) {
	        this.hunter = hunter;
	        this.session = session;
	        this.isAuthenticated = false;
	    }
	    AppHunter.prototype.authenticate = function (isPublic) {
	        this.session.start(isPublic);
	    };
	    AppHunter.prototype.fetchProducts = function () {
	        this.hunter.fetch();
	    };
	    AppHunter = __decorate([
	        angular2_1.Component({
	            selector: 'appHunter',
	            directives: [angular2_2.CORE_DIRECTIVES, angular2_2.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
	            styles: [],
	            template: appTemplate
	        }), 
	        __metadata('design:paramtypes', [hunter_1.Hunter, session_1.Session])
	    ], AppHunter);
	    return AppHunter;
	})();
	exports.AppHunter = AppHunter;


/***/ }

});
//# sourceMappingURL=app.js.map