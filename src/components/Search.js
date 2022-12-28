import React, { useState } from "react";
import mockApi from "../mockİmg.json";
import { useDispatch } from "react-redux";
import { setImages } from "../redux/images";

export default function Search() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    if (input.length > 0) {
      const filteredImages = mockApi.filter((api) => api.category == input);
      dispatch(setImages(filteredImages));
    }
    else {
      dispatch(setImages(mockApi))
    }
  }
    
  return (
    <div className="container-fluid mt-5">
      <form className="d-flex" role="search" onSubmit={search}>
        <input
          className="form-control me-2 outline-none"
          type="search"
          placeholder="image search..."
          aria-label="Search"
          value={input}
          onChange={handleChange}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
