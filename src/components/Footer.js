import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDBBtn } from "mdbreact";

import { detectBtnStyle } from '../helpers';

class Footer extends Component {
  renderSocialLinks = links => {
    return links.map(link => ( 
      <MDBBtn key={link.name} size="sm" className="m-2" href={link.url} target="_blank" color={detectBtnStyle(link.color)}>{link.name}</MDBBtn>
    ));
  } 

  render() {
    const { options, optionsLoading } = this.props.options;
    let footerContent = !optionsLoading && `© ${ options.acf.year_est } - ${new Date().getFullYear()} | ${ options.acf.copyright }`; 
    return (
      <footer className="py-5 mt-auto">
        <div className="container text-center">
          <h2>{ !optionsLoading && options.acf.footer_title }</h2>
          { !optionsLoading && this.renderSocialLinks(options.acf.social_links) }
          <br />
          <div className="mt-3">
            { footerContent }
          </div>
        </div>
      </footer>    
    );
  }
}

Footer.propTypes = {
  options: PropTypes.object
};

export default Footer;