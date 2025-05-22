import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner, Alert, Badge } from "react-bootstrap";
import { BsCartCheck, BsBoxSeam, BsCalendarCheck } from "react-icons/bs";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/orders/mine`, {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch orders.");
        return res.json();
      })
      .then((data) => {
        setOrders(data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center fw-bold display-5 text-primary">
        <BsBoxSeam className="mb-2" /> Your Orders
      </h2>
      {loading && (
        <div className="text-center py-5">
          <Spinner animation="border" role="status" />
        </div>
      )}
      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}
      {!loading && !error && orders.length === 0 && (
        <Alert variant="info" className="text-center">
          <BsCartCheck className="mb-1" /> You have no orders yet.
        </Alert>
      )}
      <Row className="g-4 justify-content-center">
        {(orders || []).map((order) => (
          <Col
            key={order._id}
            xs={12}
            sm={10}
            md={8}
            lg={6}
            className="mb-4 d-flex align-items-stretch"
          >
            <Card className="shadow border-0 w-100 order-card h-100 transition">
              <Card.Body>
                <Card.Title className="mb-3">
                  <span className="fw-bold">Order #{order._id.slice(-6).toUpperCase()}</span>
                  <Badge bg={order.status === "Delivered" ? "success" : "warning"} className="ms-2">
                    {order.status || "Pending"}
                  </Badge>
                  <span className="float-end text-muted">
                    <BsCalendarCheck className="mb-1" />{" "}
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : ""}
                  </span>
                </Card.Title>
                <Card.Text className="mb-2">
                  <strong>Total:</strong> <span className="fs-5">${order.total?.toFixed(2) ?? "0.00"}</span>
                </Card.Text>
                <Card.Text>
                  <strong>Items:</strong>
                  <ul className="mb-1">
                    {(order.items || []).map((item, idx) => (
                      <li key={idx}>
                        <span className="fw-bold">{item.name}</span> × {item.quantity}
                      </li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}