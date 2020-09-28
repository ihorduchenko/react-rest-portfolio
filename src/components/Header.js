import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer } from "mdbreact";
import ContentButton from './common/ContentButton';

class Header extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { options } = this.props.options;
    console.log('heade options: ');
    console.log(options);
    let logoSVGcode = options.acf.graphics_fields.logo_svg_code;
    let logo = logoSVGcode ? <span className="logo-svg" dangerouslySetInnerHTML={{ __html: logoSVGcode }} /> : '';
    
    console.log('logoSVGcode: ');
    console.log(logoSVGcode);

    return (
      <MDBNavbar color="indigo" dark expand="md" scrolling fixed="top" tag="header">
        {/* <MDBContainer>
          <MDBNavbarBrand className="py-0">
            <NavLink exact className="nav-link white-text p-0" to="/">{ logo }</NavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav className="mt-2 mt-md-0 align-items-md-center" right>
              <MDBNavItem>
                <NavLink exact className="nav-link font-weight-normal" to={'/'}>Portfolio</NavLink>
              </MDBNavItem>
              <MDBNavItem>
                <NavLink exact className="nav-link font-weight-normal" to={'/about'}>About</NavLink>
              </MDBNavItem>
              <MDBNavItem>
                <NavLink exact className="nav-link font-weight-normal" to={'/blog'}>Blog</NavLink>
              </MDBNavItem>
              { options.acf.common_links.auth_link && 
                <MDBNavItem className="ml-md-3">
                  <ContentButton classNames="btn btn-info btn-sm" link={options.acf.common_links.auth_link} />
                </MDBNavItem>
              }
              <MDBNavItem className="ml-md-3">
                <NavLink exact className="btn btn-primary btn-sm" to={'/contact'}>Contact</NavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer> */}
      </MDBNavbar>
    );
  }
}

export default Header;