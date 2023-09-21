import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BookContext from './context/ book'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookContext.Provider value={5}>
      <App />
    </BookContext.Provider>
  </React.StrictMode>
);
