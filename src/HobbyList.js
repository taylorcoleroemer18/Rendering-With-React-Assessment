import React from "react";
import "./HobbyList.css";

function HobbyList({ hobbies }) {
  if(hobbies.length > 0){
    const list = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);
    let content = (
      <>
        <h4>Hobbies</h4>
        <ul>{list}</ul>
      </>
    )
    return content;
  } else {
    return null; 
  }
}

export default HobbyList;
