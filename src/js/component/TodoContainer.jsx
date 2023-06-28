import React, { useState } from "react";
import Todo from "./Todo.jsx";

export default function TodoContainer() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([""]);

  const onChangeHandler = (event) => setUserInput(event.target.value);

  const addTodoHandler = (event) => {
    if (event.key === "Enter") {
      setTodoList([...todoList, userInput]);
      setUserInput("");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={userInput}
          onChange={onChangeHandler}
          onKeyUp={addTodoHandler}
        />
      </form>
      {todoList.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}
