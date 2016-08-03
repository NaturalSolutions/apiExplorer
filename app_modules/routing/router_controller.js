'use strict';

var Marionette = require('backbone.marionette');
var Router = require('./router');
var Main = require('../main/main.view');
var HomeView = require('../home/home.view');

module.exports = Marionette.Object.extend({
    initialize: function(options) {},

    home: function() {
        Main.getInstance().rgMain.show(HomeView.getNewInstance());
    },
    
    thesaurus: function() {
        Main.getInstance().rgMain.show(HomeView.getNewInstance({
        	project: 'thesaurus',
        }));
    },

    ecoReleveData: function() {
        Main.getInstance().rgMain.show(HomeView.getNewInstance({
        	project: 'ecoReleveData',
        }));
    },

    position: function() {
        Main.getInstance().rgMain.show(HomeView.getNewInstance({
        	project: 'position',
        }));
    }, 

    eCollection: function() {
        Main.getInstance().rgMain.show(HomeView.getNewInstance({
        	project: 'eCollection',
        }));
    },
});
