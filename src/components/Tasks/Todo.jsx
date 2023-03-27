import React, { useContext, useState } from "react";
import TodoContext from "./../../context/TodoContext";
import NewTask from "./NewTask";

const Todo = (props) => {
  //   const context = useContext(TodoContext);
  const [getCheck, setCheck] = useState(false);
  const [getInput, setInput] = useState(false);

  const handleCheckTask = () => {
    setCheck(!getCheck);
  };

  const handleCheckInput = () => {
    setInput(!getInput);
  };

  return (
    <div>
      <div className="d-flex justify-content-between  w-100 bg-dark rounded p-3 mt-3 todo">
        {/* <div className={`${getCheck} ? "p-1 border border-warning border-left-2 border-bottom-0 border-top-0 border-right-0" : "border-danger"`}> */}
        <div
          className={`p-1 border border-left-2 border-bottom-0 border-top-0 border-right-0 ${
            !getCheck ? "border-warning" : "border-danger"
          }`}
        >
          <h3 className="text-warning ml-2">{props.title}</h3>
          {getCheck ? <del>{props.describe}</del> : <p>{props.describe}</p>}
        </div>
        <div>
          <div>
            <button className="btn btn-danger mr-2" onClick={props.deleted}>
              Delete
            </button>
            <button className="btn btn-warning" onClick={handleCheckInput}>
              Edit
            </button>
            <button className="btn btn-warning ml-2" onClick={handleCheckTask}>
              Check
            </button>
          </div>
          <div>
            {getInput && !getCheck ? (
              <input
                type="text"
                onChange={props.changed}
                className="form-control mt-3"
              />
            ) : (
              false
            )}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Todo;
