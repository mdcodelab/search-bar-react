import React from "react";
import { FaSearch } from "react-icons/fa";
import "./App.css";
import data from "./Data.json";
import { IoMdClose } from "react-icons/io";

function App() {
  const [filteredData, setFilteredData] = React.useState([]);

  function handleFilter(e) {
    const searchWord=e.target.value;
    const newFiltered=data.filter((value) => value.title.toLowerCase().includes(searchWord.toLowerCase()))
    setFilteredData(newFiltered);
    if(searchWord === "") {
      setFilteredData([]);
    }

  }

  return (
    <div className="app">
      <div className="search">
        <h2>Search for books</h2>
        <div className="searchInputs">
          <input type="text" placeholder="Enter a book name" onChange={handleFilter}/>
          <FaSearch
            className="icon"
            style={{
              position: "absolute",
              top: "15px",
              right: "0.5rem",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      {filteredData.length > 0 ? (
        <div className="results">
          {filteredData.slice(0,15).map((book, index) => {
            return (
              <a key={index} href={book.link} target="_blank">
                {book.title}
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default App;