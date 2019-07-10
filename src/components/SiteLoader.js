import React from 'react';
import Loader from './Loader';

const SiteLoader = () => {
  return (
    <section className="site-loader white d-flex justify-content-center align-items-center w-100 h-100">
      <Loader />
    </section>
  );
}

export default SiteLoader;