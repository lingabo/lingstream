import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./assets/style/searchlist.css";

export function Searchlist() {
  const [inputSearch, setInputSearch] = useState("");
  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <div className="Parentcontainer">
      <form className="form">
        <input
          type="search"
          className="search-data"
          placeholder="Search"
          required
          onChange={handleChange}
          value={inputSearch}
        />
        <Link className="" to={`/searchpage/${inputSearch}`}>
          <button type="submit" className="fas fa-search"></button>
        </Link>
      </form>
    </div>
  );
}
