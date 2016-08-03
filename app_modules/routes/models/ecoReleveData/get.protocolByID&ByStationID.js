'use strict';

var Backbone = require('backbone');

var Model = Backbone.Model.extend({
  urlRoot: 'http://127.0.0.1/ecoReleve-Core',
  schema: {
  },
  defaults: {
    title: '',
    verb: 'GET',
    url: '/stations/?id/protocols/?id_obs',
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
        label: 'protocol 1120745 of station 1 with his form',
        query: '/stations/1/protocols/1120745?FormName=ObsForm&DisplayMode=edit',
      },
      {
        label: 'protocol 1120745 of station 1 (data only)',
        query: '/stations/1/protocols/1120745',
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
