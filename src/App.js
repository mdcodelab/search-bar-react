import React from 'react';
import { FaSearch } from "react-icons/fa";
import "./App.css"
import BookData from "./Data.json";
import { IoMdClose } from "react-icons/io";

function App() {
  return (
    <div className="app">
      <div className="search">
        <h2>Search for books</h2>
        <div className="searchInputs">
          <input type="text" placeholder="Search for books"></input>
          <FaSearch
            className="icon"
            style={{
              position: "absolute",
              top: "15px",
              right: "0.5rem",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          ></FaSearch>
        </div>
      </div>
    </div>
  );
}

export default App;
