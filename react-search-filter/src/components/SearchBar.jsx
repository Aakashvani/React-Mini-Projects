import React from "react";
import { Container, Input, Text } from "@chakra-ui/react";

export default function SearchBar() {
  return (
    <Container>
      <Text fontSize="4xl" as="u" color="gray" textAlign="center">
        Hello everyone
      </Text>
      <Input placeholder="Search..." my="4" />
    </Container>
  );
}
