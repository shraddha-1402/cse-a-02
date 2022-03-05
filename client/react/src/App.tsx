import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/index";
import headerImg from "./assets/header.jpg";
function App() {
  // const [email, setEmail] = useState("");
  const [page, setPage] = useState("");

  const saveEmail = (event: any) => {
    const { value }: { value: string } = event.target;
    // setEmail(value);

    const user = value.split(".")[0];
    switch (user) {
      case "admin":
        setPage("/admin");
        break;
      case "progress-incharge":
        setPage("/progress-incharge");
        break;
      case "project-incharge":
        setPage("/project-incharge");
        break;
      case "student":
        setPage("/student");
        break;
      default:
        setPage("");
        break;
    }
  };

  return (
    <div className="App">
      <Navbar link={"/"} />
      <div className="w-100p">
        <img src={headerImg} alt="header" className="responsive-img" />
      </div>
      <main className="content-body">
        <div className="card mw-28r p-1 my-1 mx-auto">
          <h1 className="center-text my-0-5">Login</h1>
          <div className="m-1">
            <div className="pos-rel w-100p my-1-5">
              <label htmlFor="standard-input" className="input-label pos-abs">
                Email
              </label>
              <input
                type="email"
                // value={email}
                onChange={saveEmail}
                className="input std-input"
              />
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
            <Link to={page}>
              <button className="btn btn-solid-primary w-100p my-0-25 mt-1 text-bold-weight">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
