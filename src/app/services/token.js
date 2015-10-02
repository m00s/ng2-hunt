export Class TokenService =
  Class({
    constructor: function(t) {
      this.token = t;
    },
    get: function() {
      return this.token;
    },
    set: function(t) {
      this.token = t;
    }
  });
