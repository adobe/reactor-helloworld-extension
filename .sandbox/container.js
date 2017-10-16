'use strict';

module.exports = {
  rules: [
    {
      name: 'Example Rule',
      events: [
        {
          modulePath: 'hello-world/src/lib/events/delay.js',
          settings: {
            delay: 2000
          }
        }
      ],
      conditions: [
        {
          modulePath: 'hello-world/src/lib/conditions/query-parameter.js',
          settings: {
            queryParam: 'campaign',
            queryParamValue: 'cybermonday'
          }
        }
      ],
      actions: [
        {
          modulePath: 'hello-world/src/lib/actions/alert.js',
          settings: {
            name: 'Pat'
          }
        }
      ]
    }
  ],
  dataElements: {},
  extensions: {
    'hello-world': {
      displayName: 'Hello World',
      settings: {}
    }
  },
  property: {
    name: 'Sandbox property',
    settings: {
      domains: [
        'adobe.com',
        'example.com'
      ],
      linkDelay: 100,
      euCookieName: 'sat_track',
      undefinedVarsReturnEmpty: false
    }
  },
  buildInfo: {
    turbineVersion: "14.0.0",
    turbineBuildDate: "2016-07-01T18:10:34Z",
    buildDate: "2016-03-30T16:27:10Z",
    environment: "development"
  }
};
