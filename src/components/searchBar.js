import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function SearchBar({ onSearch }) {
  const [searchFields, setSearchFields] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    onSearch(searchFields);
  };

  return (
    <Form className="mb-3">
      <Row className="mb-2">
        <Col md={2}>
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Date of birth</Form.Label>
            <Form.Control type="date" name="dob" onChange={handleChange} />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Street address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={2}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control as="select" name="state" onChange={handleChange}>
              <option value="">Select state</option>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="CA">CA</option>
              <option value="FL">FL</option>
              <option value="NY">NY</option>
              <option value="TX">TX</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Zip code</Form.Label>
            <Form.Control
              type="text"
              name="zip"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        
      </Row>

      <Row>
        <Col md={4}>
          <Button className="mt-3" variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBar;
