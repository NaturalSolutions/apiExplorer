'use strict';

var Backbone = require('backbone');

var Model = Backbone.Model.extend({
  urlRoot: 'http://127.0.0.1/ecoReleve-Core',
  schema: {
  },
  defaults: {
    title: '',
    verb: 'GET',
    url: '/sensors/?id',
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
    responseBody: {
    "data": {
        "SerialNumber": "7304",
        "Model": "Argos>GPS>GPS solar>GPS solar Microwave>GPS solar Microwave 45g",
        "UnicIdentifier": "22915",
        "ID": 2,
        "BatteryType": "énergie solaire",
        "creationDate": "20/11/2015 12:18:52",
        "Weight": 45,
        "id": 2,
        "FK_SensorType": 1,
        "Comments": "Modified for heat",
        "Compagny": "Constructeurs d'équipement argos>Microwave Telemetry",
        "Harness": "backpack",
        "Hexadecimal_Code": "660CE",
        "Status": "événement de sortie provisoire de stock>mise en service"
    },
    "recursive_level": 0,
    "fieldsets": [
        {
            "fields": [
                "ID",
                "UnicIdentifier",
                "SerialNumber",
                "Compagny",
                "Model",
                "Shape",
                "Hexadecimal_Code",
                "Argos_DutyCycle",
                "BatteryType",
                "Weight",
                "InitialLivespan",
                "Status",
                "Comments",
                "Harness"
            ],
            "legend": null
        }
    ],
    "schema": {
        "InitialLivespan": {
            "editable": false,
            "type": "Number",
            "fullPath": true,
            "name": "InitialLivespan",
            "validators": [],
            "size": 6,
            "title": "Initial Live span",
            "fieldClass": "None col-md-6",
            "defaultValue": null,
            "options": null,
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        },
        "SerialNumber": {
            "editable": false,
            "type": "Text",
            "fullPath": true,
            "name": "SerialNumber",
            "validators": [],
            "size": 6,
            "title": "Serial number",
            "fieldClass": "None col-md-6",
            "defaultValue": null,
            "options": null,
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        },
        "defaultValues": {},
        "Comments": {
            "editable": false,
            "type": "Text",
            "fullPath": true,
            "name": "Comments",
            "validators": [],
            "size": 12,
            "title": "Comments",
            "fieldClass": "None col-md-12",
            "defaultValue": null,
            "options": null,
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        },
        "UnicIdentifier": {
            "editable": false,
            "type": "Text",
            "fullPath": true,
            "name": "UnicIdentifier",
            "validators": [
                "required"
            ],
            "size": 6,
            "title": "Identifier *",
            "fieldClass": "None col-md-6",
            "defaultValue": null,
            "options": null,
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        },
        "ID": {
            "editable": false,
            "type": "Number",
            "fullPath": true,
            "name": "ID",
            "validators": [],
            "size": 6,
            "title": "ID",
            "fieldClass": "hide col-md-6",
            "defaultValue": null,
            "options": null,
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        },
        "BatteryType": {
            "editable": false,
            "type": "AutocompTreeEditor",
            "fullPath": true,
            "name": "BatteryType",
            "validators": [],
            "size": 6,
            "title": "Energy power",
            "fieldClass": "None col-md-6",
            "defaultValue": null,
            "options": {
                "iconFont": "reneco reneco-thesaurus",
                "displayValueName": "valueTranslated",
                "lng": "fr",
                "startId": "1204325",
                "wsUrl": "http://127.0.0.1/ThesaurusNew/api/thesaurus"
            },
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        },
        "Harness": {
            "editable": false,
            "type": "AutocompTreeEditor",
            "fullPath": true,
            "name": "Harness",
            "validators": [],
            "size": 6,
            "title": "Harness",
            "fieldClass": "None col-md-6",
            "defaultValue": null,
            "options": {
                "iconFont": "reneco reneco-thesaurus",
                "displayValueName": "valueTranslated",
                "lng": "fr",
                "startId": "1204238",
                "wsUrl": "http://127.0.0.1/ThesaurusNew/api/thesaurus"
            },
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        },
        "Argos_DutyCycle": {
            "editable": false,
            "type": "Text",
            "fullPath": true,
            "name": "Argos_DutyCycle",
            "validators": [],
            "size": 6,
            "title": "Duty Cycle",
            "fieldClass": "None col-md-6",
            "defaultValue": null,
            "options": null,
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        },
        "Shape": {
            "editable": false,
            "type": "AutocompTreeEditor",
            "fullPath": true,
            "name": "Shape",
            "validators": [],
            "size": 6,
            "title": "Shape",
            "fieldClass": "None col-md-6",
            "defaultValue": null,
            "options": {
                "iconFont": "reneco reneco-thesaurus",
                "displayValueName": "valueTranslated",
                "lng": "fr",
                "startId": "204113",
                "wsUrl": "http://127.0.0.1/ThesaurusNew/api/thesaurus"
            },
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        },
        "Status": {
            "editable": false,
            "type": "AutocompTreeEditor",
            "fullPath": true,
            "name": "Status",
            "validators": [],
            "size": 6,
            "title": "Status",
            "fieldClass": "None col-md-6",
            "defaultValue": null,
            "options": {
                "iconFont": "reneco reneco-thesaurus",
                "displayValueName": "valueTranslated",
                "lng": "fr",
                "startId": "204121",
                "wsUrl": "http://127.0.0.1/ThesaurusNew/api/thesaurus"
            },
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        },
        "Weight": {
            "editable": false,
            "type": "Number",
            "fullPath": true,
            "name": "Weight",
            "validators": [],
            "size": 6,
            "title": "Weight",
            "fieldClass": "None col-md-6",
            "defaultValue": null,
            "options": null,
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        },
        "Compagny": {
            "editable": false,
            "type": "AutocompTreeEditor",
            "fullPath": true,
            "name": "Compagny",
            "validators": [],
            "size": 6,
            "title": "Company",
            "fieldClass": "None col-md-6",
            "defaultValue": null,
            "options": {
                "iconFont": "reneco reneco-thesaurus",
                "displayValueName": "valueTranslated",
                "lng": "fr",
                "startId": "1204132",
                "wsUrl": "http://127.0.0.1/ThesaurusNew/api/thesaurus"
            },
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        },
        "Hexadecimal_Code": {
            "editable": false,
            "type": "Text",
            "fullPath": true,
            "name": "Hexadecimal_Code",
            "validators": [],
            "size": 6,
            "title": "Code Hexadecimal",
            "fieldClass": "None col-md-6",
            "defaultValue": null,
            "options": null,
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        },
        "Model": {
            "editable": false,
            "type": "AutocompTreeEditor",
            "fullPath": true,
            "name": "Model",
            "validators": [],
            "size": 6,
            "title": "Model",
            "fieldClass": "None col-md-6",
            "defaultValue": null,
            "options": {
                "iconFont": "reneco reneco-thesaurus",
                "displayValueName": "valueTranslated",
                "lng": "fr",
                "startId": "204114",
                "wsUrl": "http://127.0.0.1/ThesaurusNew/api/thesaurus"
            },
            "editorClass": "form-control",
            "editorAttrs": {
                "disabled": true
            }
        }
    }
},
    requestBody: {
      FormName: 'SensorForm',
      DisplayMode: 'display'
    },
    comment: '',
    presets: [
      {
        label: '2',
        query: '/sensors/2',
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
