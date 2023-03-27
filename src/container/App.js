import React, { Fragment } from "react";
import { Route, Routes, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NewTask from "./../components/Tasks/NewTask";
import Todos from "./../components/Tasks/Todos";
import About from "./../components/About";
import Nav from "../components/Nav";
import Profile from "../components/Profile";
import Error from "../components/Error";

const App = (props) => {
  return (
    <Fragment>
      <Nav/>
      <div className="all">
        <div className="w-50">
          <Routes>
            <Route path="/" element={<Todos />} />ّ
            <Route path="/about" element={<About/>} />
            <Route path="/profile/:username" element={<Profile/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default App;