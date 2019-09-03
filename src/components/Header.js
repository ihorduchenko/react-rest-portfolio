import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer } from "mdbreact";

class Header extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  getPath(item) {
    return new URL(item.url).pathname;
  }

  makeLink(item) {
    if (item.target === '_blank') {
      return <a href={ item.url } target="_blank" rel="noopener noreferrer" className="nav-link font-weight-normal">{ item.title }</a>
    }
    return <NavLink exact className="nav-link font-weight-normal" to={this.getPath(item)}>{ item.title }</NavLink>
  }

  renderMenu = menu => {
    menu.map(item => console.log(item));
    return menu.map(item => (
      <MDBNavItem key={item.ID}>
        {this.makeLink(item)}
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

export default Header;