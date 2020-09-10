import React, { useState } from "react";
import "./App.css";
import InputField from "./components/inputField";
import DisplayTodo from "./components/displayTodo";
import HeaderCmp from "./components/headerCmp";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addTodos = () => {
    if (todo != "") {
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (index) => {
    console.log(index);
    const newTodo = todoList.filter((value, i) => i !== index);
    setTodoList(newTodo);
    console.log(newTodo);
  };

  return (
    <div className="App">
      <HeaderCmp />
      <InputField todo={todo} addTodos={addTodos} setTodo={setTodo} />
      <DisplayTodo todos={todoList} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
