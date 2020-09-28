import React, { Component, Fragment } from 'react';
import { ReactTitle } from 'react-meta-tags';

import { connect } from 'react-redux';
import { getPage } from '../../actions';

import PageContent from '../sections/PageContent';
import ContactForm from '../sections/ContactForm';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { SLUG_CONTACT } from '../../constants';

class ContactPage extends Component {
  componentDidMount() {
    this.props.getPage(SLUG_CONTACT);
  }
  
  render() {
    const { page, pageLoading } = this.props.page;

    return (
      <Fragment>
        <ReactTitle title="Contact - Ihor Duchenko React Portfolio"/>
        { !pageLoading && 
          <section className="page-contact py-5">
            <MDBContainer>
              <MDBRow center>
                <MDBCol md="6" lg="6" className="mb-4 text-center">
                  <PageContent page={page} />
                  <ContactForm />
                </MDBCol>
              </MDBRow>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);