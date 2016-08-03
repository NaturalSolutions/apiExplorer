'use strict';

var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var $ = require('jquery');
var Main = require('../main/main.view');
var MenuItemView = require('../routes/menu_item.view');
var RouteItemView = require('../routes/route_item.view');


var View = Marionette.LayoutView.extend({
    template: require('./home.tpl.html'),
    className: 'full-height',

    ui: {
      'menu': '.js-menu-container',
      'routes': '.js-routes-container'
    },

    events: {
      'click .js-btn-login': 'onBtnLoginClick',
      'click .js-btn-logout': 'onBtnLogoutClick',
      'click .js-all': 'displayAll'
    },

    initialize: function(options) {
      window.config = {
        baseUrl : 'http://' + window.location.hostname + '/',
        project: options.project
      };

      this.initColl();
      this.initRoutes();
      this.initMenu();
    },

    onBtnLoginClick: function() {
      Main.getInstance().showLogin();
    },

    onBtnLogoutClick: function() {
      Main.getInstance().logout();
    },

    displayAll: function() {
      this.collection.each(function(m){
          m.set('active', true);
      });
      this.ui.menu.find('.menu-item-view').each(function(){
        $(this).removeClass('active');
      });
    },

    initColl: function() {
      var project = window.config.project;
      var models;
      switch(project) {
          case 'position':
              models = require('../routes/models/position/**/*.js', {mode: 'list'});
              window.config.apiUrl = 'position';
              break;
          case 'thesaurus':
              models = require('../routes/models/thesaurus/**/*.js', {mode: 'list'});
              window.config.apiUrl = 'thesaurus';
              break;
          case 'ecoReleveData':
              models = require('../routes/models/ecoReleveData/**/*.js', {mode: 'list'});
              window.config.apiUrl = 'erd';
              break;
          case 'eCollection':
              models = require('../routes/models/eCollection/**/*.js', {mode: 'list'});
              window.config.apiUrl = 'eCollection';
              break;
          default:
              models = require('../routes/models/position/**/*.js', {mode: 'list'});
              window.config.apiUrl = 'position';
              break;
      }
      this.collection = new Backbone.Collection();
      for (var i = models.length - 1; i >= 0; i--) {
        this.collection.add(models[i].module.getNewInstance());
      }

    },

    initMenu: function() {
      var MenuView = MenuItemView.getInstance();
      this.collViewMenu = new Marionette.CollectionView({
        collection : this.collection,
        childView: MenuView,
        className: 'coll-view',
      });
    },

    initRoutes: function() {
      var RouteView = RouteItemView.getInstance();
      this.collView = new Marionette.CollectionView({
        collection : this.collection,
        childView: RouteView,
        className: 'coll-view'
      });
    },

    onShow: function() {
      this.collView.render();
      this.ui.routes.html(this.collView.el);

      this.collViewMenu.render();
      this.ui.menu.html(this.collViewMenu.el);
    }
});

module.exports = {
    getNewInstance: function(options) {
        return new View(options);
    }
};
