import React, { Component } from 'react';

import ThumbsUp from './assets/thumb-up.svg';
import ThumbsDown from './assets/thumb-down.svg';

import './index.scss';

const genClassName = (className) => {
  return `BinaryFeedback__${className}`;
};

class BinaryFeedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
    };

    this.onClickPositive = this.onClickPositive.bind(this);
    this.onClickNegative = this.onClickNegative.bind(this);
    this.renderPositiveContent = this.renderPositiveContent.bind(this);
    this.renderNegativeContent = this.renderNegativeContent.bind(this);
  }

  onClickPositive() {
    if (!this.props.singleSelect || this.state.selected === 0) {
      this.setState({
        selected: 1,
      });
      this.props.onClickPositive();
    }
  }

  onClickNegative() {
    if (!this.props.singleSelect || this.state.selected === 0) {
      this.setState({
        selected: 2,
      });
      this.props.onClickNegative();
    }
  }

  renderPositiveContent() {
    if (this.props.positiveContent) {
      return this.props.positiveContent;
    }
    return (
      <ThumbsUp className={genClassName('icon')} fill="red" />
    );
  }

  renderNegativeContent() {
    if (this.props.negativeContent) {
      return this.props.negativeContent;
    }
    return (
      <ThumbsDown className={genClassName('icon')} />
    );
  }

  render() {
    return (
      <div className={genClassName('container')}>
        <div className={genClassName('actions')}>
          <div className={genClassName('positive')} onClick={this.onClickPositive} role="button" tabIndex={0}>
            {this.renderPositiveContent()}
          </div>
          <div className={genClassName('negative')} onClick={this.onClickNegative} role="button" tabIndex={0}>
            {this.renderNegativeContent()}
          </div>
        </div>
      </div>
    );
  }
}

export { BinaryFeedback };
