import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Searchlist(){

     const [inputSearch, setInputSearch] = useState("");

     const handleChange = (e) => {
       setInputSearch(e.target.value);
     };

    return (
      <>
        
        
          <form className="#">
            <input
              type="search"
              className="search-data"
              placeholder="Search"
              onChange={handleChange}
              value={inputSearch}
            />
            <Link className="" to={`/searchpage/${inputSearch}`}>
              <button type="submit" className="fas fa-search"></button>
            </Link>
          </form>
        
      </>
    );
}

