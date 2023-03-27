import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mb-3">Simple todo app made by bootstrap.</div>
      <button className="btn btn-warning" onClick={() => navigate("/")}>
        Add note
      </button>
    </div>
  );
}

export default About;
