var React = require('react'),
    _ = require('underscore'),

    Link = require('./link'),
    HForm = require('./hform'),
    Input = require('./input');

var PositionAndSizeForm = React.createClass({
  getInitialState: function () {
    var settings = this.props.settings,
        position = settings.position;

    return {
      xSide: position.xSide,
      left: position.left,
      right: position.right,
      ySide: position.ySide,
      top: position.top,
      bottom: position.bottom
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var xSide = this.state.xSide,
        ySide = this.state.ySide,

        position = {
          xSide: this.state.xSide,
          ySide: this.state.ySide
        };

    position[xSide] = this.state[xSide];
    position[ySide] = this.state[ySide];

    var settings = _.extend(
      this.props.settings,
      {
        size: {
          width: this.refs.width.getValue(),
          height: this.refs.height.getValue()
        },
        position: position
      }
    );

    this.props.onSubmit(settings);
  },

  handleChangeXY: function (key, value) {
    var state = this.state;
    state[key] = value;

    this.setState(state);
  },

  handleExchangeXSide: function () {
    var xSide = this.state.xSide,
        nextXSide = (xSide === 'left') ? 'right' : 'left',

        xValue = this.state[xSide],
        state = this.state;

    state.xSide = nextXSide;
    state[xSide] = '';
    state[nextXSide] = xValue;

    this.setState(state);
  },

  handleExchangeYSide: function () {
    var ySide = this.state.ySide,
        nextYSide = (ySide === 'top') ? 'bottom' : 'top',

        yValue = this.state[ySide],
        state = this.state;

    state.ySide = nextYSide;
    state[ySide] = '';
    state[nextYSide] = yValue;

    this.setState(state);
  },

  render: function () {
    var settings = this.props.settings,
        size = settings.size;

    return (
      <HForm.Form onSubmit={ this.handleSubmit }>
        <HForm.Field
          labelText={ global.I18n.t('position_and_size_form.width.label') }>

          <Input
            ref="width"
            value={ size.width }
          />
        </HForm.Field>

        <HForm.Field
          labelText={ global.I18n.t('position_and_size_form.height.label') }>

          <Input
            ref="height"
            value={ size.height }
          />
        </HForm.Field>

        <HForm.Field
          labelText={ global.I18n.t('position_and_size_form.x.label') }>

          <div className="input-group">
            <Input
              ref="left"
              placeholder={ global.I18n.t('position_and_size_form.left.placeholder') }
              disabled={ this.state.xSide !== 'left' }
              value={ this.state.left }
              onChange={ this.handleChangeXY.bind(this, 'left') }
            />

            <span className="input-group-addon">
              <Link onClick={ this.handleExchangeXSide }>
                <span className="fa fa-exchange" />
              </Link>
            </span>

            <Input
              ref="right"
              placeholder={ global.I18n.t('position_and_size_form.right.placeholder') }
              disabled={ this.state.xSide !== 'right' }
              value={ this.state.right }
              onChange={ this.handleChangeXY.bind(this, 'right') }
            />
          </div>
        </HForm.Field>

        <HForm.Field
          labelText={ global.I18n.t('position_and_size_form.y.label') }>

          <div className="input-group">
            <Input
              ref="top"
              placeholder={ global.I18n.t('position_and_size_form.top.placeholder') }
              disabled={ this.state.ySide !== 'top' }
              value={ this.state.top }
              onChange={ this.handleChangeXY.bind(this, 'top') }
            />

            <span className="input-group-addon">
              <Link onClick={ this.handleExchangeYSide }>
                <span className="fa fa-exchange" />
              </Link>
            </span>

            <Input
              ref="bottom"
              placeholder={ global.I18n.t('position_and_size_form.bottom.placeholder') }
              disabled={ this.state.ySide !== 'bottom' }
              value={ this.state.bottom }
              onChange={ this.handleChangeXY.bind(this, 'bottom') }
            />
          </div>
        </HForm.Field>

        <HForm.Submit value={ global.I18n.t('configurator.submit.value') } />
      </HForm.Form>
    );
  }
});

module.exports = PositionAndSizeForm
