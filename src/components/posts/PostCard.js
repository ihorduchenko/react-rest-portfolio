import React from 'react';
import { NavLink } from 'react-router-dom';

import { DEF_POST_THUMB } from '../../constants';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import '../../styles/thumb.css';

const PostCard = ({ post }) => {
  let featured_url = post.feat_img_url;
  const thumb = featured_url ? featured_url : DEF_POST_THUMB;
  const slug = post.slug;
  const title = post.title.rendered;
  const excerpt = post.excerpt ? post.excerpt.rendered : post.content.rendered;

  return(
    <MDBCard className="h-100">
      <NavLink to={ "/blog/" + slug } className="d-block bg-cover media-4-3" style={{ backgroundImage: `url(${ thumb })` }}>
        <span className="sr-only">{ title }</span>
      </NavLink>
      <MDBCardBody>
        <MDBCardTitle>{ title }</MDBCardTitle>
        <MDBCardText tag="div" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <NavLink role="button" className="btn btn-primary" to={ "/blog/" + slug }>Read ⟶</NavLink>
      </MDBCardBody>
    </MDBCard>
  )
};

export default PostCard;