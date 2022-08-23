import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="#292d33">
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-white">
            <span style={{ marginRight: "10px" }}>
              <MDBIcon fas icon="book-open" />
            </span>
            Contact
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="text-white"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink className="nav-link">
                  <NavLink to="/" className="text-white">
                    Home
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink>
                  <NavLink className="text-white" to="/add-todo">
                    Add New
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Header;
