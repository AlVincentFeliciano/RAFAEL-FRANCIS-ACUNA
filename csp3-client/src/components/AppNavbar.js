import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default function AppNavBar() {
  // You may want to fetch user info from context here for conditional links
  // For demo purposes, we'll assume user is always logged in

  return (
    <Navbar bg="primary" expand="lg" variant="dark" className="py-3 shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          <span role="img" aria-label="logo">🛒</span> ShopSmart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="fs-5">Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className="fs-5">Products</Nav.Link>
            <Nav.Link as={Link} to="/orders" className="fs-5">Orders</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="fs-5">Cart</Nav.Link>
            <Nav.Link as={Link} to="/profile" className="fs-5">Profile</Nav.Link>
          </Nav>
          <Nav>
            <Button as={Link} to="/logout" variant="outline-light" className="mx-2 px-4">
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}