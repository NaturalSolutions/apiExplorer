'use strict';

var Backbone = require('backbone');

var Model = Backbone.Model.extend({
  urlRoot: 'http://127.0.0.1/ecoReleve-Core',
  schema: {
  },
  defaults: {
    title: '',
    verb: 'GET',
    url: '/sensors/',
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
            "FK_Individual": 313587,
            "SerialNumber": "7304",
            "Model": "GPS solar Microwave 45g",
            "UnicIdentifier": "22915",
            "ID": 2,
            "BatteryType": "énergie solaire",
            "Harness": "backpack",
            "FK_SensorType_Name": "Satellite",
            "Argos_DutyCycle": null,
            "FK_MonitoredSiteName": null,
            "Transmitter_Frequency": null,
            "Weight": 45,
            "Compagny": "Microwave Telemetry",
            "Hexadecimal_Code": "660CE",
            "Status": "mise en service"
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
        label: 'search ID 2',
        query: '/sensors/?criteria=%5B%7B%22Column%22%3A%22ID%22%2C%22ColumnType%22%3A%22Text%22%2C%22Operator%22%3A%22Is%22%2C%22Value%22%3A%222%22%7D%5D&page=1&per_page=20&total_pages=12346&total_entries=246903&offset=0&order_by=%5B%5D',
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
