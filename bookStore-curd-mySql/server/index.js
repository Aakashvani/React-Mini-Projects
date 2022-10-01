// * Important
/*
if there is any auth problem like
{
  "code": "ER_NOT_SUPPORTED_AUTH_MODE",
  "errno": 1251,
  "sqlMessage": "Client does not support authentication protocol requested by server; consider upgrading MySQL client",
  "sqlState": "08004",
  "fatal": true
}

 Use this:-  "root'@'localhost" IDENTIFIED with mySql_native_password by password or do this,
npm uninstall mysql ----> npm install mysql2
*/

import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

// express server middlewares
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password17@mySql",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`price`, `cover`) VALUE (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created successfully.");
  });
});

app.listen(8080, () => {
  console.log("connected to server");
});
