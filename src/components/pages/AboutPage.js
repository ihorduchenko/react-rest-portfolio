import React, { Component, Fragment } from 'react';
import { ReactTitle } from 'react-meta-tags';


import { connect } from 'react-redux';
import { getPage } from '../../actions';
import PageContent from '../sections/PageContent';

import { MDBContainer } from 'mdbreact';
import { SLUG_ABOUT } from '../../constants';

class AboutPage extends Component {
  componentDidMount() {
    this.props.getPage(SLUG_ABOUT);
  }
  
  render() {
    const { page, pageLoading } = this.props.page;

    return (
      <Fragment>     
        <ReactTitle title="About - Ihor Duchenko React Portfolio"/>
        { !pageLoading && 
          <section className="py-5">
            <MDBContainer>
              <PageContent page={page} />
            </MDBContainer>
          </section>
        }
      </Fragment>  
    );
  }
}

const mapStateToProps = state => ({
  page: state.page
});

const mapDispatchToProps = (dispatch) => ({
  getPage: (page) => dispatch(getPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);