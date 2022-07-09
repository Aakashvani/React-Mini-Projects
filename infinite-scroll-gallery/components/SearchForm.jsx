import React from "react";
import { setQuery } from "../utils/cookies";
import { FormControl, Button, Input } from "@chakra-ui/react";

export default function SearchForm() {
  const handleSubmit = () => {};

  const handleChange = (e) => setQuery(e.target.value);
  
  return (
    <FormControl onSubmit={handleSubmit} as="form" maxW="40rem" mx="auto">
      <Input
        isRequired
        placeholder="Search Photos Here..."
        mb=".5rem"
        onChange={handleChange}
      />

      <Button type="submit" w="100%">
        Search
      </Button>
    </FormControl>
  );
}
