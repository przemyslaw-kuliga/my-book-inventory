module.exports = { region: 'eu',
  maintenance: false,
  stack: 'cedar-14',
  config_vars: {test: 'new config'},
  addons: {},
  collaborators: 
   [ 'przemyslaw.kuliga@schibsted.pl' ],
  features: 
   { 'runtime-dyno-metadata': { enabled: false },
     'log-runtime-metrics': { enabled: false },
     'http-session-affinity': { enabled: false },
     preboot: { enabled: false },
     'http-shard-header': { enabled: false },
     'http-end-to-end-continue': { enabled: false } },
  formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
  log_drains: ['syslog://data.logentries.com:13636']};
