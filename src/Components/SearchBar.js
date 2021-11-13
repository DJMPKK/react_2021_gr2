import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <InputGroup className="mb-3 mt-3">
      <FormControl placeholder="Prosze wpisać tytuł filmu, nazwisko rezysera lub aktora" />
      <InputGroup.Append>
        <Button variant="outline-primary">Szukaj</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchBar;
