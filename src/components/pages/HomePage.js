import React, { Component, Fragment } from 'react';
import { ReactTitle } from 'react-meta-tags';

import { connect } from 'react-redux';
import { getPage, getCases } from '../../actions';

import Loader from '../Loader';
import PageHero from '../sections/PageHero';
import Cases from '../cases/Cases';

class HomePage extends Component {
  componentDidMount() {
    this.props.getPage('home');
    this.props.getCases();
  }

  render() {
    const { cases, casesLoading } = this.props.cases;
    const { page, pageLoading } = this.props.page;
    return (
      <Fragment>
        <ReactTitle title="Home Page - Ihor Duchenko React Portfolio"/>
        { (!pageLoading && page.acf.hero) && <PageHero title={page.acf.hero.title} content={page.acf.hero.content} /> }
        { (casesLoading || pageLoading || !page.acf.portfolio) ?
          <div className="text-center">
            <Loader /><br />
            Portfolio is loading...
          </div> :
          <>
            <Cases title={page.acf.portfolio.title} skills={page.acf.portfolio.skills} cases={cases} />
          </>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page,
  cases: state.cases
});

const mapDispatchToProps = (dispatch) => ({
  getPage: (page) => dispatch(getPage(page)),
  getCases: () => dispatch(getCases())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);