import React, { Component, Fragment } from 'react';
import { ReactTitle } from 'react-meta-tags';

import { connect } from 'react-redux';
import { getPage, getCases, getSkills } from '../../actions';

import Loader from '../Loader';
import PageHero from '../sections/PageHero';
import Cases from '../cases/Cases';

class HomePage extends Component {
  componentDidMount() {
    this.props.getPage('home');
    this.props.getCases();
    this.props.getSkills();
  }

  render() {
    const { options, optionsLoading } = this.props.options;
    const { skills, skillsLoading } = this.props.skills;
    const { cases, casesLoading } = this.props.cases;
    console.log()

    return (
      <Fragment>
        <ReactTitle title="Home Page - Ihor Duchenko React Portfolio"/>
        <PageHero options={options} optionsLoading={optionsLoading} />
        { (casesLoading || skillsLoading) ?
          <div className="text-center">
            <Loader /><br />
            Page is loading...
          </div> :
          <Cases skills={skills} cases={cases} /> }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page,
  cases: state.cases,
  skills: state.skills
});

const mapDispatchToProps = (dispatch) => ({
  getPage: (page) => dispatch(getPage(page)),
  getCases: () => dispatch(getCases()),
  getSkills: () => dispatch(getSkills())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);