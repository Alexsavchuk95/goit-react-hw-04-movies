import React, { Component } from 'react';
import api from '../services/api';
import CastInfo from './CastInfo';

const getIdFromProps = props => props.match.params.movieId;

export default class Cast extends Component {
  state = { cast: [] };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    api.getCast(id).then(data => {
      this.setState({
        cast: data.cast,
      });
    });
  }

  render() {
    const { cast } = this.state;
    return (
      <>{!!cast.length && cast.map(el => <CastInfo key={el.id} {...el} />)}</>
    );
  }
}
