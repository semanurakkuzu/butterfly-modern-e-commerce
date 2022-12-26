import React from "react";
export default function Search() {
  return (
      <div className="container-fluid mt-5">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 outline-none"
            type="search"
            placeholder="image search..."
            aria-label="Search"
          />
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
      </div>
  );
}
