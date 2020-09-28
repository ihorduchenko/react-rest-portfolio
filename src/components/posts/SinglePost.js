import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactTitle } from 'react-meta-tags';

import { DEF_POST_THUMB } from '../../constants';

class SinglePost extends Component {
  render() {
    const {post} = this.props;

    let featured_url = post._embedded['wp:featuredmedia'][0].source_url;
    const thumb = (featured_url ? featured_url : DEF_POST_THUMB);
    const title = post.title.rendered;
    const content = post.content.rendered;

    return (
      <Fragment>
        <ReactTitle title={`${post.title.rendered} - Ihor Duchenko React Portfolio`}/>
        <article>
          <NavLink to={ "/blog/" } className="lead">⟵ Back to posts</NavLink>
          <figure className="figure mt-3 mb-4 w-100">
            <img className="figure-img img-fluid z-depth-1" src={ thumb } alt={ title }/>
          </figure>
          <h1 className="h1 mb-4">{ title }</h1>
          <div className="text-block" dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </Fragment>  
    );
  }
}

export default SinglePost;