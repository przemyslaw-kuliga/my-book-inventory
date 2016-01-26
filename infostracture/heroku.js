var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

configurator.export('my-book-inventory').then(function (result) {
    console.log(result);
});

configurator({ name: 'my-book-inventory',
  region: 'eu',
  maintenance: false,
  stack: 'cedar-14',
  config_vars: {},
  addons: {},
  collaborators: 
   [ 'przemyslaw.kuliga@schibsted.pl',
     'lukasz.adamczuk@schibsted.pl',
     'woj.niemiec@gmail.com' ],
  features: 
   { 'runtime-dyno-metadata': { enabled: false },
     'log-runtime-metrics': { enabled: false },
     'http-session-affinity': { enabled: false },
     preboot: { enabled: false },
     'http-shard-header': { enabled: false },
     'http-end-to-end-continue': { enabled: false } },
  formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
  log_drains: [],
  domains: [ 'my-book-inventory.herokuapp.com' ] });