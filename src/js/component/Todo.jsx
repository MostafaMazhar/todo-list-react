import React, { useState } from "react";

export default function Todo(props) {
  const { todo, removeTodo, key } = props;
  const [showDelete, setShowDelete] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <p>{todo}</p>
      {showDelete && <p onClick={removeTodo}>Delete Icon</p>}
    </div>
  );
}
