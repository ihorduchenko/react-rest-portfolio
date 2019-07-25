import React, { Component, Fragment } from 'react';
import { ReactTitle } from 'react-meta-tags';
import { connect } from 'react-redux';
import { getPosts } from '../../actions';

import { MDBContainer } from 'mdbreact';
import Loader from '../Loader';
import PostsLoop from './PostsLoop';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postsContent;

    if ( loading ) {
      postsContent = <Loader />;
    } else if ( posts === null ) {
      postsContent = 'No posts found';
    } else {
      postsContent = <PostsLoop posts={ posts } />;
    }
    return (
      <Fragment>
        <ReactTitle title="Blog - Ihor Duchenko React Portfolio"/>
        <section className="py-5">
          <MDBContainer>
            <h1 className="h1 display-4 font-weight-bold mb-4">Blog</h1>
            { postsContent }
          </MDBContainer>  
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);