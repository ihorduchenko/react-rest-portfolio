import React from 'react';

const ContentButton = ({ classNames, link }) => {
  let url = link.url;
  let title = link.title;
  let target = link.target;
  return (
    <a href={url} target={target} className={classNames}>
      {title}
    </a>
  );
};

export default ContentButton;