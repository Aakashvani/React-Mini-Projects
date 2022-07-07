import React from "react";
import ListUser from "../components/ListUser";

import { Users } from "../assets/users";

import { Container, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Finder() {
  const [query, setQuery] = useState("");

  const keys = ["name", "github", "role"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <>
      <Container>
        <Text fontSize="4xl" as="u" textAlign="center">
          Masai School Members
        </Text>
        <Input
          placeholder="Search..."
          my="4"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </Container>

      {<ListUser data={search(Users)} />}
    </>
  );
}
