'use strict';

var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var $ = require('jquery');


var View = Marionette.LayoutView.extend({
    template: require('./route_item.tpl.html'),
    className: 'route-item-view clearfix',

    events: {
        'submit .js-form-send': 'send',
        'click .js-preset': 'preset',

    },

    modelEvents: {
      'change:active': 'toggle',
    },

    ui: {
        'responseBody': '.js-response-body',
        'responseStatus': '.js-response-status',
        'query': 'input.js-query',
        'requestBody': 'textarea.js-request-body',
    },

    initialize: function() {

    },

    toggle: function() {
        if (this.model.get('active')) {
            this.$el.removeClass('hidden');
        } else {
            this.$el.addClass('hidden');
        }
    },

    preset: function(e) {
        var i = $(e.currentTarget).data('index');
        this.ui.query.val(this.model.get('presets')[i].query);
        this.ui.requestBody.val(JSON.stringify(this.model.get('presets')[i].requestBody, undefined, 4));
        var url = window.apiBaseURL + this.model.get('presets')[i].query;
        var requestBody = this.model.get('presets')[i].requestBody;
        var method = this.model.get('verb');
    },

    send: function(e) {
        e.preventDefault();
        var $form = $(e.currentTarget);
        $form.addClass('form-state-loading');
        var query = this.ui.query.val();
        var requestBody = this.ui.requestBody.val();
        var url = window.apiBaseURL + query;

        var params = {
          url: url,
          method: this.model.get('verb'),
          context: this,
          dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
        };

        if( requestBody ) {
            var requestBody = JSON.parse(requestBody);
            params['data'] = requestBody;
        }

        $.ajax(params).done(function(response, status, xhr) {
            this.model.set('response', response);
            this.ui.responseStatus.html(xhr.status);
            this.ui.responseBody.html(JSON.stringify(this.model.get('response'), null, 4));
        }).fail(function(xhr, status, statusText){
            this.model.set('response', statusText);
            this.ui.responseStatus.html(xhr.status);
            this.ui.responseBody.html(JSON.stringify(this.model.get('response'), null, 4));
        }).always(function() {
            $form.removeClass('form-state-loading');
        });
    }
});

module.exports = {
    getNewInstance: function() {
        return new View();
    },
    getInstance: function() {
        return View;
    },
};
