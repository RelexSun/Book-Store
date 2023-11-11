import { useContext } from "react";
import BookContext from "../context/book";

function useBooksContext() {
  return useContext(BookContext);
}

export default useBooksContext;
