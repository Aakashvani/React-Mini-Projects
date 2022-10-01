import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBook] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8080/books");
        //here i'm setting data to seBook useState
        setBook(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);
  return (
    <div className="h-screen box-content p-10 border-4" >
      <h1 className="text-cyan-200">Book Store 📚</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  );
};

export default Books;
