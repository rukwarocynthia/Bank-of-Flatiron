import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(""); // Step 1: Manage the search term

  // Step 2: Handle changes to the input field
  const handleChange = (e) => {
    const newSearchTerm = e.target.value; // Get the new search term
    setSearchTerm(newSearchTerm); // Update the state

    // Step 3: Invoke the callback to trigger filtering
    if (onSearch) {
      onSearch(newSearchTerm);
    }
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm} // Bind the current search term to the input field
        onChange={handleChange} // Handle user input
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
