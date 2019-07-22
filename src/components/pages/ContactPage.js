import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { getPage } from '../../actions';

import PageHero from '../sections/PageHero';
import PageContent from '../sections/PageContent';
import ContactForm from '../sections/ContactForm';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class ContactPage extends Component {
  componentDidMount() {
    this.props.getPage('contact');
  }
  
  render() {
    const { options, optionsLoading } = this.props.options;
    const { page, pageLoading } = this.props.page;

    return (
      <Fragment>     
        <PageHero options={options} optionsLoading={optionsLoading} />
        { ( !pageLoading && !optionsLoading ) && 
          <section className="py-5">
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