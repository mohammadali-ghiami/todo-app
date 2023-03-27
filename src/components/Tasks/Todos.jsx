import React, { Fragment, useContext } from "react";
import TodoContext from "./../../context/TodoContext";
import Todo from "./Todo";
import NewTask from "./NewTask";

const Todos = (props) => {
  const context = useContext(TodoContext);

  return (
    <div>
      <div>
        <h2>Todo App</h2>
      </div>
      <div className="w-100 bg-dark rounded p-3">
        <NewTask />
      </div>
      <div>
        {context.todos.map((per) => (
          <Todo
            id={per.id}
            title={per.title}
            describe={per.describe}
            deleted={() => context.handleDeleteTask(per.id)}
            changed={(event) => context.handleChangeTask(event, per.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;

// rfce
