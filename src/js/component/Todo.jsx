import React, { useState } from "react";

export default function Todo(props) {
  const { todo } = props;
  const [showDelete, setShowDelete] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <p>{todo}</p>
      {showDelete && <p>Delete Icon</p>}
    </div>
  );
}
