'use strict';

var Backbone = require('backbone');

var Model = Backbone.Model.extend({
  urlRoot: 'http://',
  schema: {
  },
  defaults: {
    title: 'Booleen de validation d\'existence d\'un topic',
    verb: 'GET',
    url: '/existBy',
    description: 'return',
    isCollection: true,
    requestBody: {},
    requestParams: {
      'typeField':'string',
      'value':'string',
      'lng':'string'
    },
    responseHeaders: [
      ''
    ],
    responseStatus: [
      '200: Successful HTTP requests with data and empty data (e.g. request with filter)',
      '400: Bad request (e.g. malformed request syntax)',
      '401: Unauthorized (no credentials in request header)',
      '403: Forbidden (e.g. the user is not allowed)'
    ],
    responseBody: [{

    }],
    comment: '',
    presets: [
      {
        label: '',
        query: '',
      },
    ]
  },

  initialize: function() {
  },

});

module.exports = {
    getNewInstance: function() {
        return new Model;
    }
};
