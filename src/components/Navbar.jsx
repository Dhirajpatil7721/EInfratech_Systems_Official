import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button, NavDropdown, Dropdown, Modal, Form, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const NavBar = () => {
  const [dashboardDropdownOpen, setDashboardDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Store search input
  const [showSearchModal, setShowSearchModal] = useState(false); // Toggle search modal
  const navigate = useNavigate();

  // Example search links
  const searchData = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Healthcare", path: "/healthcare" },
    { name: "Retail Industry", path: "/retailpage" },
    { name: "Public Sector", path: "/publicsector" },
    { name: "Life Sciences", path: "/lifescience" },
    { name: "Customer", path: "/customer" },
    { name: "Services", path: "/services" },
    { name: "Features", path: "/features" },
    { name: "Contact Us", path: "/contactus" },
    { name: "About Us", path: "/about" }
  ];

  // Filter links based on search input
  const filteredResults = searchData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle Navigation
  const handleNavigate = (path) => {
    navigate(path);
    setShowSearchModal(false); // Close modal
    setSearchTerm(""); // Clear search input
  };

  return (
    <>
      <Navbar bg="white" variant="light" expand="lg" className="shadow-sm">
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand as={NavLink} to="/">
            <img
              src="/images/logo.jpg"
              alt="Logo"
              width="75"
              height="75"
              className="d-inline-block align-top"
            />{" "}
            <p style={{color:"black"}}>
            Einfratech Systems India
            </p>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              {/* Dashboard Dropdown */}
              <NavDropdown
                title="Dashboard"
                id="dashboard-dropdown"
                className="custom-dropdown"
                show={dashboardDropdownOpen}
                onMouseEnter={() => setDashboardDropdownOpen(true)}
                onMouseLeave={() => setDashboardDropdownOpen(false)}
                onClick={() => setDashboardDropdownOpen((prev) => !prev)}
              >
                <NavDropdown.Item as={NavLink} to="/dashboard">Dashboard Home</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/healthcare">Healthcare</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/retailpage">Retail Industry</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/publicsector">Public Sector</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/lifescience">Life Sciences</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={NavLink} to="/customer">Customer</Nav.Link>
              <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
              <Nav.Link as={NavLink} to="/features">Features</Nav.Link>

              {/* Contact Dropdown */}
              <Dropdown
                show={contactDropdownOpen}
                onMouseEnter={() => setContactDropdownOpen(true)}
                onMouseLeave={() => setContactDropdownOpen(false)}
                onClick={() => setContactDropdownOpen((prev) => !prev)}
              >
                <Dropdown.Toggle as="div" className="nav-link" role="button">
                  Contact
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/contactus">Contact Us</Dropdown.Item>
                  {/* <Dropdown.Item as={NavLink} to="/about">About Us</Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>

            {/* Search Icon Button */}
            <Nav className="ms-3">
              <Button variant="outline-primary" className="search-icon" onClick={() => setShowSearchModal(true)}>
                <i className="bi bi-search"></i>
              </Button>
            </Nav>

            {/* Sign In Button */}
            <Nav className="ms-3">
              <Button as={NavLink} to="/signin" variant="primary" className="px-4">
                Sign In
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search Modal */}
      <Modal show={showSearchModal} onHide={() => setShowSearchModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          {/* Search Results */}
          {searchTerm && (
            <ListGroup className="mt-2">
              {filteredResults.length > 0 ? (
                filteredResults.map((item, index) => (
                  <ListGroup.Item key={index} action onClick={() => handleNavigate(item.path)}>
                    {item.name}
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item>No results found</ListGroup.Item>
              )}
            </ListGroup>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSearchModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavBar;
