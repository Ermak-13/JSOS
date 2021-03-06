var React = require('react'),

    OS = require('os'),
    Form = require('./form'),
    Container = require('./container');

var ScriptsTab = React.createClass({
  getInitialState: function () {
    return {
      scripts: global.Scripts.all()
    };
  },

  add: function (url) {
    OS.installScript(url);
  },

  remove: function (script) {
    OS.uninstallScript(script);
  },

  componentWillMount: function () {
    global.Scripts.updated(function (scripts) {
      this.setState({
        scripts: scripts
      });
    }.bind(this));
  },

  render: function () {
    return (
      <div>
        <p className="text-justify" style={{ fontSize: '14px' }}
          dangerouslySetInnerHTML={{ __html: I18n.t('installer.scripts.text') }} />

        <Form
          onSubmit={ this.add }
        />

        <Container
          collection={ this.state.scripts }
          onClickRemoveBtn={ this.remove }
        />
      </div>
    );
  }
});

module.exports = ScriptsTab;
