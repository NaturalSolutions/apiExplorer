'use strict';

var Backbone = require('backbone');

var Model = Backbone.Model.extend({
  urlRoot: 'http://',
  schema: {
  },
  defaults: {
    title: 'Générateur d\'arbre',
    verb: 'GET',
    url: '/getTree',
    description: 'return',
    isCollection: true,
    requestBody: {},
    requestParams: {
      "startNode":"int[]",
      "language":"string",
      "deprecated":"boolean",
      "justLeafs":"boolean",
      "profMin":"int",
      "profMax":"int",
      "notDisplayOutOfMax":"boolean"
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
