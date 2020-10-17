import React from "react";

const SearchBar = ({ currentSearch, onChange }) => {
  return (
    <div>
      <span>
        <input type="text" onChange={onChange} value={currentSearch} />
      </span>
      <span>
        <button>Hummmmm</button>
      </span>
    </div>
  );
};

export default SearchBar;
