import React, { useState } from "react";
import { toast } from "react-toastify";
import TodoContext from "../context/TodoContext";

const GlobalState = (props) => {
  const [getTodo, setTodo] = useState([]);
  const [getSingleTodo, setSingleTodo] = useState("");
  const [getSingleTodos, setSingleTodos] = useState("");

  const handleNewTask = () => {
    const todos = [...getTodo];
    const todo = {
      id: Math.random(Math.floor() * 1000),
      title: getSingleTodo,
      describe: getSingleTodos,
    };
    if ((todo.title, todo.describe !== "")) {
      todos.push(todo);
      setTodo(todos);

      toast.success("Task added", {
        position: "bottom-right",
      });
    }
  };

  const setTodoo = (event) => {
    setSingleTodo(event.target.value);
  };

  const setTodoos = (event) => {
    setSingleTodos(event.target.value);
  };

  const handleDeleteTask = (id) => {
    const todo = [...getTodo];
    const filtered = todo.filter((p) => p.id !== id);
    setTodo(filtered);
    toast.error("Task deleted", {
      position: "bottom-left",
    });
  };

  const handleChangeTask = (event, id) => {
    const todo = [...getTodo];
    const todoIndex = todo.findIndex((p) => p.id === id);
    const todos = todo[todoIndex];
    todos.describe = event.target.value;
    const todoo = [...todo];
    todoo[todoIndex] = todos;
    setTodo(todoo);
  };

  return (
    <TodoContext.Provider
      value={{
        todos: getTodo,
        todo: getSingleTodo,
        todoo: getSingleTodos,
        handleNewTask: handleNewTask,
        handleDeleteTask: handleDeleteTask,
        handleChangeTask: handleChangeTask,
        setTodoo: setTodoo,
        setTodoos: setTodoos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default GlobalState;
