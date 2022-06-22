import React from "react";
import "./Activity.css";

function Activity({ time, description }) {
  let content = (
    <tr>
      <td>{time}</td>
      <td>{description}</td>
    </tr>
  );
  return content;
}

export default Activity;
