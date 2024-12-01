import React, { useState } from "react";
import { Table, Pagination } from "react-bootstrap";

function ResultsTable({ contacts, onSelectContact }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(contacts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentContacts = contacts.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.map((contact, index) => (
            <tr
              key={index}
              onClick={() => onSelectContact(contact)}
              style={{ cursor: "pointer" }}
            >
              <td>{`${contact.firstName} ${contact.lastName}`}</td>
              <td>{contact.dob}</td>
              <td>{contact.address}</td>
              <td>{contact.city}</td>
              <td>{contact.state}</td>
              <td>{contact.zip}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="d-flex justify-content-center">
        <Pagination.Prev
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          &laquo;
        </Pagination.Prev>
        <Pagination.Item active>
          Page {currentPage} of {totalPages}
        </Pagination.Item>
        <Pagination.Next
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </Pagination.Next>
      </Pagination>
    </>
  );
}

export default ResultsTable;
