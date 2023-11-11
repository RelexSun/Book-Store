import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-book-context";

function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books
    ? books.map((book) => <BookShow key={book.id} book={book} />)
    : null;

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
