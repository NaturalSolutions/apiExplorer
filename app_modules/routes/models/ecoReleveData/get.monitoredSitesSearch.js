'use strict';

var Backbone = require('backbone');

var Model = Backbone.Model.extend({
  urlRoot: 'http://127.0.0.1/ecoReleve-Core',
  schema: {
  },
  defaults: {
    title: '',
    verb: 'GET',
    url: '/monitoredSites/',
    description: 'return',
    isCollection: true,
    requestBody: {},
    requestParams: {
      "order_by":"list(string)",
      "per_page":"int",
      "criteria":"list(object)",
      "offset": "int"

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
    responseBody: [
    {
        "total_entries": 1
    },
    [
        {
            "FK_Sensor": null,
            "StartDate": "11/06/2009 07:48:28",
            "LON": 1.01976,
            "FK_SensorType": null,
            "Category": "Nid",
            "FK_SensorModel": null,
            "Name": "08N01C",
            "ID": 2,
            "ELE": 1063,
            "LAT": 30.7,
            "Active": false
        }
    ]
],

    requestBody: {
      criteria:JSON.stringify([{"Column":"ID","ColumnType":"Text","Operator":"Is","Value":"1"}]),
      per_page:20,
      offset:0,
      order_by:JSON.stringify([]),
    },
    comment: '',
    presets: [
      {
        label: '1',
        query: '/monitoredSites/?criteria=%5B%7B%22Column%22%3A%22ID%22%2C%22ColumnType%22%3A%22Text%22%2C%22Operator%22%3A%22Is%22%2C%22Value%22%3A%222%22%7D%5D&page=1&per_page=20&total_pages=12346&total_entries=246903&offset=0&order_by=%5B%5D',
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
