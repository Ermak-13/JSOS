var MicroEvent = require('microevent'),
    Events = require('./events'),
    settings = require('./settings'),
    DEFAULT_SETTINGS_DIALOG_NAME = settings.DEFAULT_SETTINGS_DIALOG_NAME;

var AppDispatcher = function () {
  this.log = function (level, message) {
    this.trigger(Events.log, level, message);
  };

  this.updatedLogger = function (logs) {
    this.trigger(Events.updatedLogger, logs);
  };

  this.openDesktopConfigurator = function () {
    this.trigger(Events.openDesktopConfigurator);
  };

  this.installModule = function (name, module) {
    this.trigger(Events.installModule, name, module);
  };

  this.uninstallModule = function (name) {
    this.trigger(Events.uninstallModule, name);
  };

  this.updatedModules = function (modules) {
    this.trigger(Events.updatedModules, modules);
  };

  this.installScript = function (script) {
    this.trigger(Events.installScript, script);
  };

  this.uninstallScript = function (script) {
    this.trigger(Events.uninstallScript, script);
  };

  this.updatedScripts = function (scripts) {
    this.trigger(Events.updatedScripts, scripts);
  };

  this.installStyle = function (style) {
    this.trigger(Events.installStyle, style);
  };

  this.uninstallStyle = function (style) {
    this.trigger(Events.uninstallStyle, style);
  };

  this.initWidget = function (widget) {
    this.trigger(Events.initWidget, widget);
  };

  this.addWidget = function (name) {
    this.trigger(Events.addWidget, name);
  };

  this.removeWidget = function (widgetId) {
    this.trigger(Events.removeWidget, widgetId);
  };

  this.updatedWidgets = function (widgets) {
    this.trigger(Events.updatedWidgets, widgets);
  };
};
MicroEvent.mixin(AppDispatcher);

module.exports = new AppDispatcher();
