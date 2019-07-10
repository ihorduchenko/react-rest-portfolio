import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../actions';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Loader from '../Loader';
import SinglePost from './SinglePost';

class Post extends Component {
  getCurrentSlug() {
    let url = window.location.href.split("/");
    let slug = url.pop() || url.pop();
    return slug;
  }

  componentDidMount() {
    this.props.getPost(this.getCurrentSlug());
  }

  render() {
    const { post, loading } = this.props.post;
    let postContent;

    if ( post.length === 0 || loading ) {
      postContent = <Loader />;
    } else {
      postContent = <SinglePost post={post} />;
    }

    return (
      <section className="py-5">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="8">
              { postContent }
            </MDBCol>
          </MDBRow>  
        </MDBContainer>
      </section>  
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);