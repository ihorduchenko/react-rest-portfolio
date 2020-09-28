import React, { Component } from 'react';
import SocialIcons from './common/SocialIcons';

class Footer extends Component { 
  render() {
    const { options } = this.props.options;
    let footerSlogan = options.acf.footer_section.slogan;
    let footerSocials = options.acf.socials_fields;
    console.log('footerSlogan: ');
    console.log(footerSlogan);
    console.log('footerSocials: ');
    console.log(footerSocials);
    return (
      <footer className="py-5 mt-auto">
        <div className="container text-center">
          <h2>{ footerSlogan ? footerSlogan : 'no sloan' }</h2>
          { footerSocials ? <SocialIcons socials={footerSocials} /> : 'no socials' }
          <div className="mt-3">
            © {new Date().getFullYear()} - Ihor Duchenko
          </div>
        </div>
      </footer>    
    );
  }
}

export default Footer;