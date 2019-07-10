import React, { Component } from "react";
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer } from "mdbreact";

class Header extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  getPath(url) {
    return new URL(url).pathname;
  }

  renderMenu = menu => {
    return menu.map(item => (
      <MDBNavItem key={item.ID}>
        <NavLink exact className="nav-link font-weight-normal" to={this.getPath(item.url)}>{ item.title }</NavLink>
      </MDBNavItem>
    ));
  };

  render() {
    const { items, menuLoading } = this.props.menus;
    const { options, optionsLoading } = this.props.options;

    let navItems = menuLoading ? '' : this.renderMenu(items);
    let logo = optionsLoading ? 'Ihor Duchenko' : <img width="100" src={ options.acf.logo_big_white } alt={ options.acf.site_slogan } />;

    return (
      <MDBNavbar color="indigo" dark expand="md" scrolling fixed="top" tag="header">
        <MDBContainer>
          <MDBNavbarBrand>
            <NavLink exact className="nav-link white-text py-0" to="/">{ logo }</NavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              { navItems }
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

Header.propTypes = {
  menus: PropTypes.object,
  options: PropTypes.object
}

export default Header;