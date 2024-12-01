import React, { useState } from "react";
import contacts from "./data/contacts.json";
import SearchBar from "./components/searchBar";
import ResultsTable from "./components/ResultsTable";
import SelectedContact from "./components/SelectedContact";
import { Container } from "react-bootstrap";

function App() {
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSearch = (searchCriteria) => {
    const filtered = contacts.filter((contact) => {
      return Object.keys(searchCriteria).every((key) => {
        return (
          searchCriteria[key] === "" ||
          String(contact[key] || "")
            .toLowerCase()
            .includes(searchCriteria[key].toLowerCase())
        );
      });
    });
    setFilteredContacts(filtered);
  };

  return (
    <Container>
    <div className="App">
      <h1>Contact Search</h1>
      <SearchBar onSearch={handleSearch} />
      <ResultsTable
        contacts={filteredContacts}
        onSelectContact={setSelectedContact}
      />
      {selectedContact && <SelectedContact contact={selectedContact} />}
    </div>
  </Container>
    
  );
}

export default App;
