import React, { Component } from 'react';
import SocialIcons from './common/SocialIcons';

class Footer extends Component { 
  render() {
    const { options, optionsLoading } = this.props.options;
    return (
      <footer className="py-5 mt-auto">
        <div className="container text-center">
          <h2>{ ((!optionsLoading) && options.acf.footer_section.slogan) && options.acf.footer_section.slogan }</h2>
          { ((!optionsLoading) && options.acf.socials_fields) && <SocialIcons socials={options.acf.socials_fields} /> }
          <div className="mt-3">
            © {new Date().getFullYear()} - Ihor Duchenko
          </div>
        </div>
      </footer>    
    );
  }
}

export default Footer;