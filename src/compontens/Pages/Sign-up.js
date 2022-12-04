import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Sign-up.css";

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
    <div className="background">
      <div className="container">
        <section className="wrapper">
          <h1 className="text-large"> Sign In</h1>

          <form
            onSubmit={handleSubmit}
            action=""
            name="signin"
            className="form"
          >
            <div className="input-controll">
              <label className="input-label" hidden>
                UserName
              </label>
              <input
                className="input-field"
                type="text"
                name="text"
                required
                id="text"
                placeholder="UserName"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-controll">
              <label className="input-label">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span class="eye" onclick="myFunction()">
                  <i id="hide1" class="far fa-eye"></i>
                  <i id="hide2" class="fas fa-eye-slash"></i>
                </span>
              </label>
            </div>
            <button type="submit" className="input-submit">
              Submit
            </button>
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
                <span className="text-log"> Sign in with Google</span>
              </a>
            </div>
            <div className="method-controll">
              <a href="#" className="method-action">
                <i className="fa-brands fa-facebook-f"></i>
                <span className="text-log"> Sign in with Facebook</span>
              </a>
            </div>
            <div className="method-controll">
              <a href="#" className="method-action">
                <i className="fa-brands fa-apple"></i>
                <span className="text-log"> Sign in with Apple</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  setToken: PropTypes.func.isRequired,
};
