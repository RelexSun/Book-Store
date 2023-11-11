import { useState } from "react";
import useBooksContext from "../hooks/use-book-context";

function BookCreate() {
  const [term, setTerm] = useState("");

  const { handleCreateBook } = useBooksContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateBook(term);
    setTerm("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
