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
      <Container textAlign="center">
        <Text fontSize="4xl" as="u" >
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


//////////////////////BASIC SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

///////////////////////SEARCH ON A DATATABLE

// function App() {
//   const [query, setQuery] = useState("");
//   const keys = ["first_name", "last_name", "email"];
//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(query))
//     );
//   };
// return (
//   <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//     {<Table data={Search(Users)} />}
//   </div>
// );
// }


////////////////////// API SEARCH

// function App() {
//     const [query, setQuery] = useState("");
//     const [data, setData] = useState([]);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         const res = await axios.get(`http://localhost:5000?q=${query}`);
//         setData(res.data);
//       };
//       if (query.length === 0 || query.length > 2) fetchData();
//     }, [query]);
  
//     return (
//       <div className="app">
//           <input
//             className="search"
//             placeholder="Search..."
//             onChange={(e) => setQuery(e.target.value.toLowerCase())}
//           />
//         {<Table data={data} />}
//       </div>
//     );
//   }