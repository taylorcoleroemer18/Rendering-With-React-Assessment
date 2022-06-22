import React from "react";
import "./Header.css";

function Header({ name, imageSrc, birthday }) {
  let content = (
    <header className="header">
      <img alt="kitten" src={imageSrc}></img>
      <h1>
        {name}
      </h1>
      <h2>
        {birthday}
      </h2>
    </header>
  );
  return content;
}

export default Header;
