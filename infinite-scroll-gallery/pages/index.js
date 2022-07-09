import React from "react";
import SearchForm from "../components/SearchForm";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box w="90%" m="0 auto">
      <Heading align="center" py="10" fontSize="4xl">
        welcome to infinity scroll gallery
      </Heading>
      
      <SearchForm/>
    </Box>
  );
}
