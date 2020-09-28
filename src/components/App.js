import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SiteLoader from './SiteLoader';
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Posts from './posts/Posts';
import Post from './posts/Post';

import '../styles/styles.css';

import { connect } from 'react-redux';
import { getWPOptions } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getWPOptions();
  }

  render() {
    const options = this.props.options;

    const renderApp = options.optionsLoading ? (
      <SiteLoader />
    ) : (
      <Fragment>
        <Header options={options} />
        <main className="main">
          <Route exact path="/"
            render={() => <HomePage options={options} />}
          />
          <Route exact path="/about"
            render={() => <AboutPage options={options} />}
          />
          <Route exact path="/contact"
            render={() => <ContactPage options={options} />}
          />
          <Route exact path={'/blog'} component={Posts} />
          <Route exact path={'/blog/:slug/'} component={Post} />
        </main>
        <Footer options={options} />
      </Fragment>
    );

    return (
      <Router>
        {renderApp}
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  options: state.options
});

const mapdispatchToProps = (dispatch) => ({
  getWPOptions: () => dispatch(getWPOptions())
});

export default connect(mapStateToProps, mapdispatchToProps)(App);