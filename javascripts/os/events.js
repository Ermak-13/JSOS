var sprintf = require('underscore.string/sprintf');

var Events = {
  log: 'log',
  saveDesktop: 'save-desktop',

  installScript: 'install-script',
  updatedInstaller: 'updated-installer',

  initWidget: 'init-widget',
  addWidget: 'add-widget',
  removeWidget: 'remove-widget'
};

module.exports = Events;
