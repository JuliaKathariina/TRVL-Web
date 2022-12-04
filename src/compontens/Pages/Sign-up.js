import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../App.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function SignUp({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div className="wrapper-sign">
      <h1> Please SignUp</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>UserName</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p> Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit"> Submit</button>
        </div>
      </form>
    </div>
  );
}

SignUp.propTypes = {
  setToken: PropTypes.func.isRequired,
};
