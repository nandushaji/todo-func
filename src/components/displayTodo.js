import React, { useState } from "react";

const DisplayTodo = (props) => {
  const lineStyle = {
    textDecoration: "line-through",
  };
  const [checked, setCheck] = useState(false);
  console.log(checked);
  return props.todos.map((todo, index) => (
    <div key={index} className="container">
      <input type="checkbox" onChange={() => setCheck(!checked)} />
      <span style={checked ? lineStyle : null}>{todo}</span>
      <button
        className="button"
        onClick={() => {
          props.deleteTodo(index);
        }}
      >
        x
      </button>
    </div>
  ));
};
export default DisplayTodo;
