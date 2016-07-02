var sprintf = require('sprintf-js').sprintf,

    globalSettings = require('../settings'),
    AppDispatcher = require('../app_dispatcher'),
    Events = require('../events'),
    storage = require('../storage');

var WidgetHelper = {
  close: function () {
    AppDispatcher.removeWidget(this.props.widgetId);
  },

  openConfigurator: function () {
    var refName = this.props.configuratorRefName,
        ref = this.refs[refName];

    ref.open();
  },

  handleConfigure: function (settings) {
    this.setSettings(settings);
  },

  load: function () {
    storage.get(
      this.getStorageKey(),
      function (settings) {
        if (settings) {
          this.setSettings(settings);
        }
      }.bind(this)
    );
  },

  save: function () {
    storage.set(
      this.getStorageKey(),
      this.getSettings()
    );
  },

  getStorageKey: function () {
    return sprintf(
      globalSettings.WIDGET_STORAGE_KEY,
      { id: this.props.widgetId }
    );
  }
};

module.exports = WidgetHelper;
