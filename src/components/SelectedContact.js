import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function SelectedContact({ contact }) {
  return (
    <div className="container mt-4">
      <Card>
        <Card.Header as="h2">Selected Contact</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Name:</strong> {`${contact.firstName} ${contact.lastName}`}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Email:</strong> {contact.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Phone:</strong> {contact.phone}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Address:</strong> {contact.address}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>City:</strong> {contact.city}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>State:</strong> {contact.state}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Zip:</strong> {contact.zip}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SelectedContact;

