import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

// {// dont forget to install json-server from npm }

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:3001/books");

    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Don't do this: cuz it will request api over and over again
  // fetchBooks();

  const editBookById = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleCreateBook = async (title) => {
    const res = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, res.data];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
}

export default App;
