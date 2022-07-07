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

export default function ListUser({ data }) {
  return (
    <TableContainer px={"16"}>
      <Table size="lg">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Github</Th>
            <Th>Role</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(({ user: id, name, github, role }) => (
            <Tr key={id}>
              <Td>{name}</Td>
              <Td>{github}</Td>
              <Td>{role}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
