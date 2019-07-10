import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import PostCard from './PostCard';

class PostsLoop extends Component {
  render() {
    const { posts } = this.props;
    return (
      <MDBRow>
        {posts.map(post => (
          <MDBCol key={post.id} md="6" lg="4" className="mb-4">
            <PostCard post={post} />
          </MDBCol>
        ))}
      </MDBRow>
    );
  }
}

export default PostsLoop;