var modules = {
  React: require('react'),
  ReactDOM: require('react-dom'),
  _: require('underscore'),
  moment: require('moment'),

  OS: require('os'),
  Desktop: require('./desktop'),
  Widgets: require('./widgets')
};

for (var key in modules) {
  global[key] = modules[key];
}
