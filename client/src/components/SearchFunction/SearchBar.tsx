import React, { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  searchUpdate: Function;
}

function SearchBar(props: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event: any) => {
    setSearchQuery(event.target.value);
    props.searchUpdate(event.target.value);
  };

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={handleSearch}
      />
      <Button variant="outline-success" onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
