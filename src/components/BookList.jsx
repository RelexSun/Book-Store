import { useContext } from "react";
import BookShow from "./BookShow";
import BookContext from "../context/ book";

function BookList({ books, onDelete, onEdit }) {
  const value = useContext(BookContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return <div className="book-list">
    {value}
    {renderedBooks}
    </div>;
}

export default BookList;
