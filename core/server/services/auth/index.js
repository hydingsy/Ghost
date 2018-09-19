const passport = require('./passport');
const auth = require('./auth');
const authorize = require('./authorize');
const authenticate = require('./authenticate');
const session = require('./session');
const oauth = require('./oauth');

/* TODO: Remove when v0.1 is dropped */
exports.init = function (options) {
    oauth.init(options);
    return passport.init(options);
};

/* TODO: Remove when v0.1 is dropped */
exports.oauth = oauth;

exports.auth = auth;
exports.authorize = authorize;
exports.authenticate = authenticate;
exports.session = session;
