import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Search images..."
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
