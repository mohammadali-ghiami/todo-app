import React, { useContext } from "react";
import TodoContext from "./../../context/TodoContext";

const NewTask = (props) => {
  const context = useContext(TodoContext);
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <input
              type="text"
              className="form-control mr-2"
              placeholder="Title"
              onChange={context.setTodoo}
            />
            <input
              type="text"
              className="form-control"
              placeholder="describetion"
              onChange={context.setTodoos}
            />
          </div>
          <div>
            <button className="btn btn-warning" onClick={context.handleNewTask}>
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
