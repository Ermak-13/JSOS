var React = require('react');
var ReactDOM = require('react-dom');

var Widget = require('./components/widget');
var DefaultConfigurationDialog = require('./components/default_configuration_dialog');

ReactDOM.render(
  <Widget
    header="Welcome Widget"
  />,
  document.getElementById('widgets-container')
);

ReactDOM.render(
  <DefaultConfigurationDialog />,
  document.getElementById('configuration-dialogs-container')
);
