import React from "react";
import { Navbar, Nav, Container, Image, NavLink } from "react-bootstrap";
import logo from "../images/Logo.png";
import GoogleButton from "../GoogleButton";
import { isAdamin } from "utils/login";
import { t } from "dictionaries/en";

import "./NavBar.scss";

const NavBar = (props) => {
  const { isLoggedIn, userRole } = props;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container className="navbar-container">
        <Navbar.Brand href="/">
          <Image src={logo} width={50} height={50} />
          Food Coverer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavLink id="products-page" href="/products">
              Products
            </NavLink>
            <Nav.Link href="/additives">{t.NavBar.additives}</Nav.Link>
            <Nav.Link href="/#categories">{t.NavBar.catrgories}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id="nutri-section" href="/#nutri">
              {t.NavBar.scoring}
            </Nav.Link>
            <Nav.Link href="/#tags">{t.NavBar.tagsDescription}</Nav.Link>
            {isAdamin(userRole) && (
              <Nav.Link href="/admin">{t.NavBar.admin}</Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link id="user-panel" href="/user">
                {t.NavBar.user}
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link>
              <GoogleButton
                isLoggedIn={isLoggedIn}
                onLoginSuccess={props.onLoginSuccess}
                onLoginFailure={props.onLoginFailure}
                onSignoutSuccess={props.onSignoutSuccess}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
