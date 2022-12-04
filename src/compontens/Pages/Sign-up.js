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
    <main className="main">
      <div className="container">
        <section className="wrapper">
          <div className="heading">
            <h1 className="text-large"> Sign In</h1>
            <p className="text-normal">
              New User ?
              <span>
                <a href="#" className="text-links">
                  Create a account
                </a>
              </span>
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            action=""
            name="signin"
            className="form"
          >
            <div className="input-controll">
              <label for="text" className="input-label" hidden>
                UserName
              </label>
              <input
                className="input-flied"
                type="text"
                name="text"
                required
                id="text"
                placeholder="UserName"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-controll">
              <label for="password" className="input-label" hidden>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password
                "
                className="input-field"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-controll">
              <a href="#" className="text-links">
                Forgot Password
              </a>
              <button type="submit" className="input-submit">
                Submit
              </button>
            </div>
          </form>
          <div className="striped">
            <span className="method-line"></span>
            <span className="striped-text">Or</span>
            <span className="striped-line"></span>
          </div>
          <div className="method">
            <div className="method-controll">
              <a href="#" className="method-action">
                <i className="fa-brands fa-google"></i>
                <span> Sign in with Google</span>
              </a>
            </div>
            <div className="method-controll">
              <a href="#" className="method-action">
                <i className="fa-brands fa-facebook-f"></i>
                <span> Sign in with Facebook</span>
              </a>
            </div>
            <div className="method-controll">
              <a href="#" className="method-action">
                <i className="fa-brands fa-apple"></i>
                <span> Sign in with Apple</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

SignUp.propTypes = {
  setToken: PropTypes.func.isRequired,
};
