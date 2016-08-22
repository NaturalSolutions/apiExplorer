'use strict';

var Backbone = require('backbone');

var Model = Backbone.Model.extend({
  urlRoot: 'http://',
  schema: {
  },
  defaults: {
    title: 'Test l\'existence d\'un topic par nom ou fullpath, pour un type donné',
    verb: 'POST',
    url: '/existByWithType',
    description: 'return',
    isCollection: true,
    requestBody: {},
    requestParams: {
      'sInfo':'string',
      'sTypeField':'string',
      'lng':'string',
      'iTypeId':'int'
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
