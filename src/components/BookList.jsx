import { useContext } from "react";
import BookShow from "./BookShow";
import BookContext from "../context/book";

function BookList() {
  const { books } = useContext(BookContext);

  const renderedBooks = books
    ? books.map((book) => <BookShow key={book.id} book={book} />)
    : null;

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
