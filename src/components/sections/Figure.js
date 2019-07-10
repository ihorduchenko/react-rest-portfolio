import React from 'react';

const Figure = ({ page, options }) => {
  return (
    <figure className="figure">
      <img 
        src={ page.feat_img_url } 
        className="figure-img w-100 z-depth-1"
        alt={ options.acf.site_author } />
        { options.acf.site_author &&
          <figcaption className="figure-caption text-center">
            { options.acf.site_author }
          </figcaption>
        }
    </figure>
  );
};

export default Figure;