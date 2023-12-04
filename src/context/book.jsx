import { createContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:3001/books");

    setBooks(res.data);
  };

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
      // title: title,
    });

    const updatedBooks = [...books, res.data];
    setBooks(updatedBooks);
  };

  // Everything that's inside the value object is something that can be shared with to rest of the application.
  const valueToShare = {
    books,
    fetchBooks,
    editBookById,
    deleteBookById,
    handleCreateBook,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
};

export { Provider };
export default BookContext;
