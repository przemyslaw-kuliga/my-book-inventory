var _ = require('lodash');
var base = require('./base.js');
var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {
    debug: false
});

configurator(_.merge({}, base, {
    name: 'my-book-inventory',
    domains: [ 'my-book-inventory.herokuapp.com' ]
}));