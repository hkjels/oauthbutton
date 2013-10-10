
/**
 * Module dependencies.
 */

var domify = require('domify')
  , object = require('object')
  , format = require('format').format
  , query = require('querystring')
  , templ = require('./template.html');

/**
 * Expose `oauthbutton`.
 */

module.exports = oauthbutton;

/**
 * oauthlink.
 */

function oauthbutton(authUri, opts, text) {
  var defaults = { redirect_uri: location.href, response_type: 'token' }
    , opts = object.merge(defaults, opts)
    , params = query.stringify(opts)
    , text = text || 'Log in'
    , button = domify(format(templ, authUri, params, text));

  return button;
}

