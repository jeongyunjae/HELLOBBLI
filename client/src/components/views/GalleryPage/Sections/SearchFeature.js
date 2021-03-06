import React, { useState } from "react";

import "./SearchFeature.css";

function SearchFeature(props) {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const [SearchTerm, setSearchTerm] = useState("");
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    props.refreshFunction(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="제목 및 내용"
          onChange={searchHandler}
          style={{
            width: 200,
            height: "24px",
            paddingInlineStart: "5px",
            display: "inline-block",
          }}
          value={SearchTerm}
        ></input>
        <button className="search-button" type="submit">
          검색
        </button>
      </form>
    </div>
  );
}

export default SearchFeature;
