import React from 'react';

const Milestone = ({ digit, caption }) => (
  <div className="d-flex flex-wrap align-items-end">
    <strong className="font-weight-bold h1 mr-2 mb-0">{ digit }</strong>
    <small className="font-weight-light h4 mb-0">{ caption }</small>
  </div>
);

export default Milestone;