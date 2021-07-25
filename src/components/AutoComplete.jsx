import React, { useState } from "react";
import "./AutoComplete.css";

const Autocomplete = ({ lang }) => {
  const [searchText, setSearchText] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResFound] = useState(true)

  const handleChange = (e) => {
    let searchval = e.target.value;
    let suggestion = [];
    if (searchval.length > 0) {
      suggestion = lang
        .sort()
        .filter((e) => e.toLowerCase().includes(searchval.toLowerCase()));
        setResFound(suggestion.length !==0 ? true : false)
    }
    setSuggest(suggestion);
    setSearchText(searchval);
  };

  const suggestedText = (value) => {
    setSearchText(value);
    setSuggest([]);
  };
  const getSuggestion = () => {
    if (suggest.length === 0 && searchText !== "" && !resfound) {
      return <p>Search Content Not Found</p>;
    }

    return (
      <ul>
        {suggest.map((item, index) => {
          return (
            <div key={index}>
              <li onClick={() => suggestedText(item)}>{item}</li>
              {index !== suggest.length - 1 && <hr />}
            </div>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        value={searchText}
        onChange={handleChange}
      />
      {getSuggestion()}
    </div>
  );
};

export default Autocomplete;
