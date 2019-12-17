import React from 'react';
import PropTypes from 'prop-types';

const ReviewsInfo = ({ author, content }) => {
  return (
    <li>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsInfo;
ReviewsInfo.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
