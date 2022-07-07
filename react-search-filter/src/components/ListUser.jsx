import React from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

import { Users } from "../assets/users";

export default function ListUser() {
  return (
    <TableContainer px={"16"}>
      <Table size="lg">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Gender</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Users.map(({ user: id, first_name, last_name, email, gender }) => (
            <Tr key={id}>
              <Td>
                {first_name} {last_name}
              </Td>
              <Td>{email}</Td>
              <Td>{gender}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
