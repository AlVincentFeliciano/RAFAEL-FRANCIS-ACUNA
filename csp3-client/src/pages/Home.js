import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container fluid className="bg-light min-vh-100 d-flex align-items-center py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="text-center">
            <h1 className="display-2 fw-bold text-primary mb-4">Welcome to ShopSmart!</h1>
            <p className="lead mb-5">
              The best place to discover and buy amazing products.
              <br />Browse our curated collection or check your orders!
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button as={Link} to="/products" size="lg" variant="primary" className="px-5 shadow">
                Shop Now
              </Button>
              <Button as={Link} to="/orders" size="lg" variant="outline-primary" className="px-5 shadow">
                My Orders
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}