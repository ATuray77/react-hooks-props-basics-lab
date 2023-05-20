import React from "react";

function Links(props) {
  return (
    <>
      <h3>Links</h3>
      <a href="#links">{props.github}</a>
      <a href="#links">{props.linkedin}</a>
    </>
  )
}

export default Links