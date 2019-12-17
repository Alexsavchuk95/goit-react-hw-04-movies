import React, { Component } from 'react';
import api from '../services/api';
import ArticleList from './ArticleList/ArticleList';

export default class HomePage extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    api
      .getItems()
      .then(({ data }) => {
        this.setState({
          articles: data.results,
        });
      })
      .catch(error => console.log('erorr', error));
  }

  render() {
    const { articles } = this.state;
    return <ArticleList items={articles} />;
  }
}
