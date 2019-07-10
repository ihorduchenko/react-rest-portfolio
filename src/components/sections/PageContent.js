import React from 'react';
import PropTypes from 'prop-types';

const PageContent = page => (
  <div className="text-block" dangerouslySetInnerHTML={{ __html: page.page.content.rendered }}></div>
);

PageContent.propTypes = {
  page: PropTypes.object
}

export default PageContent;