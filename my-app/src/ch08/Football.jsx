// Football.jsx
import React from "react";

function Football(props) {
  const shoot = (a, b) => {
    //alert("Great shot!");
    alert(b.type);
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>
      Take the shot!
    </button>
  );
}

export default Football;