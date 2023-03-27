import { createContext } from "react";

const TodoContext = createContext({
    todos: [],
    todo: "",
    todoo: "",
    handleNewTask: () => {},
    handleDeleteTask: () => {},
    handleChangeTask: () => {},
    setTodoo: () => {},
    setTodoos: () => {},
})
 
export default TodoContext;