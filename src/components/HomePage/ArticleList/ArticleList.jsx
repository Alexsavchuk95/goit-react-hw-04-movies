import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArticleList = ({ items, location }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link
          to={{
            pathname: `/movies/${item.id}`,
            state: { from: location },
          }}
        >
          {item.title}{' '}
        </Link>
      </li>
    ))}
  </ul>
);

ArticleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.shape({
    state: PropTypes.string,
  }).isRequired,
};

export default withRouter(ArticleList);
