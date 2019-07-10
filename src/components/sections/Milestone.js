import React from 'react';
import PropTypes from 'prop-types';

const Milestone = ({ digit, caption }) => (
  <div className="d-flex flex-wrap align-items-end">
    <strong className="font-weight-bold h1 mr-2 mb-0">{ digit }</strong>
    <small className="font-weight-light h4 mb-0">{ caption }</small>
  </div>
);

Milestone.propTypes = {
  digit: PropTypes.string,
  caption: PropTypes.string
}

export default Milestone;