'use strict';

var Backbone = require('backbone');

var Model = Backbone.Model.extend({
  urlRoot: 'http://127.0.0.1/ecoReleve-Core',
  schema: {
  },
  defaults: {
    title: '',
    verb: 'GET',
    url: '/individuals/',
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
    responseBody:[
    {
        "total_entries": 1
    },
    [
        {
            "FK_SensorType": null,
            "Species": "Chlamydotis undulata undulata",
            "Survey_type": null,
            "Status_": "mort",
            "Mark_code_1": null,
            "Breeding_Ring_Code": "U08M02795",
            "ID": 1,
            "FK_Sensor": null,
            "Mark_Color_1": null,
            "Mark_Color_2": null,
            "Monitoring_Status": null,
            "Sex": "mâle",
            "Mark_code_2": null,
            "Chip_Code": "0006D0CF62",
            "FK_SensorModel": null,
            "Release_Ring_Code": null,
            "Origin": "relaché"
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
        query: '/individuals/?criteria=%5B%7B%22Column%22%3A%22ID%22%2C%22ColumnType%22%3A%22Text%22%2C%22Operator%22%3A%22Is%22%2C%22Value%22%3A%221%22%7D%5D&page=1&per_page=20&total_pages=12346&total_entries=246903&offset=0&order_by=%5B%5D',
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
