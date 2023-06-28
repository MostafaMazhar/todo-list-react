import React from "react";
import TodoContainer from "./TodoContainer.jsx";

const Home = () => {
  return (
    <>
      <div className="text-center">
        <h1>todos</h1>
        <TodoContainer />
      </div>
    </>
  );
};

export default Home;
