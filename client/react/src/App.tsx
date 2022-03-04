import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="content-body">
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="card mw-28r p-1 my-3-5 mx-auto">
          <h1 className="center-text my-0-5">Login</h1>
          <div className="m-1">
            <div className="pos-rel w-100p my-1-5">
              <label htmlFor="standard-input" className="input-label pos-abs">
                Email
              </label>
              <input type="email" className="input std-input" />
            </div>
            <div className="pos-rel w-100p my-1-5">
              <label htmlFor="standard-input" className="input-label pos-abs">
                Password
              </label>
              <input type="password" className="input std-input" />
              <a href="/" className="link hover-underline">
                <span className="sm-text my-0-25 primary-text">
                  Forgotten Password?
                </span>
              </a>
            </div>
            <Link to="/home">
              <button className="btn btn-solid-primary w-100p my-0-25 mt-1 text-bold-weight">
                LOGIN
              </button>
            </Link>
            <p className="sm-text my-0-5">
              Do not have an account yet?{" "}
              <a
                href="/Components/signUp.html"
                className="link primary-text hover-underline"
              >
                SignUp
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
