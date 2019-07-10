import React from 'react';

const PageContent = page => (
  <div className="text-block" dangerouslySetInnerHTML={{ __html: page.page.content.rendered }}></div>
);

export default PageContent;