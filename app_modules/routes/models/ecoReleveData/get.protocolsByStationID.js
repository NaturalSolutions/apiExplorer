'use strict';

var Backbone = require('backbone');

var Model = Backbone.Model.extend({
  urlRoot: 'http://127.0.0.1/ecoReleve-Core',
  schema: {
  },
  defaults: {
    title: '',
    verb: 'GET',
    url: '/stations/?id/protocols/',
    description: 'return',
    isCollection: true,
    requestBody: {},
    requestParams: {
      "?id":"int",
      'FormName': 'optional : fetch data with his form',
      'DisplayMode': 'optional : preset mode of form ("edit"/"display")'
    },
    responseHeaders: [
      ''
    ],
    responseStatus: [
      '200: Successful HTTP requests with data and empty data (e.g. request with filter)',
      '500: Server internal Error',
      '401: Unauthorized (no credentials in request header)',
      '403: Forbidden (e.g. the user is not allowed)'
    ],
    responseBody: [{

    }],
    requestBody: {
      FormName:'ObsForm',
      DisplayMode:'edit'
    },
    comment: '',
    presets: [
      {
        label: 'protocols of station 1',
        query: '/stations/1/protocols?FormName=ObsForm&DisplayMode=edit',
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
