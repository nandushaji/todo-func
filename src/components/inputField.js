import React from "react";
const InputField = (props) => {
  return (
    <div className="todo">
      <input
        className="field"
        type="text"
        value={props.todo}
        onChange={(event) => {
          props.setTodo(event.target.value);
        }}
      />
      <button className="buttonAdd" onClick={() => props.addTodos()}>
        +
      </button>
    </div>
  );
};

export default InputField;
