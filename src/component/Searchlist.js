

export function Searchlist(){


    return (
      <>
        <div className="search-icon">
          <span className="fas fa-search"></span>
        </div>
        <div className="cancel-icon">
          <span className="fas fa-times"></span>
        </div>
        <div className="search">
          <form className="#">
            <input
              type="search"
              className="search-data"
              placeholder="Search"
              required
            />
            <button type="submit" className="fas fa-search"></button>
          </form>
        </div>
      </>
    );
}

