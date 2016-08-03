'use strict';

var Backbone = require('backbone');

var Model = Backbone.Model.extend({
  urlRoot: 'http://127.0.0.1/ecoReleve-Core',
  schema: {
  },
  defaults: {
    title: 'search station',
    verb: 'GET',
    url: '/stations/',
    description: 'return station list with total according query from criteria ',
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
            "ID": 1,
            "StationDate": "07/03/1997 10:44:00",
            "Name": "H14",
            "LAT": 32.15563,
            "LON": -2.64283,
            "fieldActivityId_Name": "Nest monitoring",
            "FK_Region_Region": "Bouarfa",
            "FK_MonitoredSite_Name": null,
            "Place": "Bouarfa",
            "ELE": null,
            "FK_FieldWorker_FieldWorkers": ["Mr X"
            ]
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
        query: '/stations/?criteria=%5B%7B%22Column%22%3A%22ID%22%2C%22ColumnType%22%3A%22Text%22%2C%22Operator%22%3A%22Is%22%2C%22Value%22%3A%221%22%7D%5D&page=1&per_page=20&total_pages=12346&total_entries=246903&offset=0&order_by=%5B%5D',
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
