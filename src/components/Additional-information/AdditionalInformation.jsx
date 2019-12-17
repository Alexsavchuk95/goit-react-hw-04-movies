import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdditionalInfo = ({ url, state }) => {
  return (
    <>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link
            to={{
              pathname: `${url}/cast`,
              state,
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `${url}/reviews`,
              state,
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};
export default AdditionalInfo;

AdditionalInfo.propTypes = {
  url: PropTypes.string.isRequired,
  state: PropTypes.shape({
    from: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
