import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { DEF_POST_THUMB } from '../../constants';

class SinglePost extends Component {
  render() {
    const post = this.props.post[0];
    console.log(post);

    let featured_url = post.feat_img_url;
    const thumb = (featured_url ? featured_url : DEF_POST_THUMB);
    const title = post.title.rendered;
    const content = post.content.rendered;

    return (
      <article>
        <NavLink to={ "/blog/" } className="lead">⟵ Back to posts</NavLink>
        <figure className="figure mt-3 mb-4 w-100">
          <img className="figure-img img-fluid z-depth-1" src={ thumb } alt={ title }/>
        </figure>
        <h1 className="h1 display-4 mb-4">{ title }</h1>
        <div className="text-block" dangerouslySetInnerHTML={{ __html: content }} />
      </article>  
    );
  }
}

export default SinglePost;