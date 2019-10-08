import React, { Component, Fragment } from 'react';
import { ReactTitle } from 'react-meta-tags';

import { connect } from 'react-redux';
import { getPage } from '../../actions';

import PageHero from '../sections/PageHero';
import PageContent from '../sections/PageContent';
import Figure from '../sections/Figure';
import Milestone from '../sections/Milestone';

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class AboutPage extends Component {
  componentDidMount() {
    this.props.getPage('about');
  }
  
  render() {
    const { options, optionsLoading } = this.props.options;
    const { page, pageLoading } = this.props.page;

    return (
      <Fragment>     
        <ReactTitle title="About - Ihor Duchenko React Portfolio"/>
        <PageHero options={options} optionsLoading={optionsLoading} />
        { ( !pageLoading && !optionsLoading ) && 
          <section className="py-5">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6" lg="5" className="mb-4 offset-lg-1 order-md-last">
                  { page.feat_img_url && 
                    <Figure page={page} options={options} />
                  }
                </MDBCol>  
                <MDBCol md="6" lg="6" className="mb-4">
                  <PageContent page={page} />                  
                  { page.acf.milestones && 
                    <MDBRow className="mt-4">
                      { page.acf.milestones.map(m => (
                          <MDBCol key={m.caption} md="4" className="mb-4">
                            <Milestone digit={m.digit} caption={m.caption} />
                          </MDBCol>
                        )
                      ) }
                    </MDBRow>
                  }
                  { page.acf.button && 
                    <MDBBtn target="_blank" color="dark" href={page.acf.button.button_url}>{page.acf.button.button_text}</MDBBtn>
                  }
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);