import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Navbar } from "../Navbar";

const AddUser = () => {
  const [userForm, setUserForm] = useState("");

  return (
    <>
      <Navbar link={"/admin"} />
      <main className=" mw-48r m-2 mx-auto">
        <div className="flex-row justify-spc-bet align-center">
          <div className="flex-row align-center">
            <button className="btn btn-outline-secondary p-1 mr-1">
              <FaChevronLeft />
            </button>
            <h1 className="center-text">Create Account</h1>
          </div>
          <button className="btn btn-solid-primary">Save</button>
        </div>

        <div className="form-layout">
          <label htmlFor="acc-type">Account type:</label>
          <select
            className="input std-input my-2"
            name="user"
            id="acc-type"
            onChange={(event) => setUserForm(event.target.value)}
          >
            <option value="" selected>
              Select
            </option>
            <option value="student">Student</option>
            <option value="progress-incharge">Progress Incharge</option>
            <option value="project-incharge">Project Incharge</option>
            <option value="investor">Investor</option>
          </select>
        </div>

        {userForm === "student" && (
          <form>
            <div className="form-layout">
              <label htmlFor="name">Name:</label>
              <div className="flex-row align-center gap-1">
                <div className="pos-rel w-50p">
                  <label htmlFor="first-name" className="input-label pos-abs">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="input std-input"
                    id="first-name"
                  />
                </div>
                <div className="pos-rel w-50p">
                  <label htmlFor="last-name" className="input-label pos-abs">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="input std-input"
                    id="last-name"
                  />
                </div>
              </div>
            </div>

            <div className="form-layout my-1">
              <label htmlFor="email">Email:</label>
              <input type="text" className="input std-input" id="email" />
            </div>

            <div className="form-layout my-1">
              <label htmlFor="reg-id">Registration ID:</label>
              <input type="text" className="input std-input" id="reg-id" />
            </div>

            <div className="form-layout my-1">
              <label htmlFor="department">Department:</label>
              <select className="input std-input" name="user" id="department">
                <option value="" selected>
                  Select
                </option>
                <option value="student">CSE</option>
                <option value="progress-incharge">IT</option>
                <option value="project-incharge">Mechanical</option>
                <option value="investor">Electronics</option>
              </select>
            </div>
          </form>
        )}

        {userForm === "progress-incharge" && (
          <form>
            <div className="form-layout">
              <label htmlFor="department">Department:</label>
              <select className="input std-input" name="user" id="department">
                <option value="" selected>
                  Select
                </option>
                <option value="student">CSE</option>
                <option value="progress-incharge">IT</option>
                <option value="project-incharge">Mechanical</option>
                <option value="investor">Electronics</option>
              </select>
            </div>

            <div className="form-layout">
              <label htmlFor="name">Name:</label>
              <div className="flex-row align-center gap-1 my-1">
                <div className="pos-rel w-50p">
                  <label htmlFor="first-name" className="input-label pos-abs">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="input std-input"
                    id="first-name"
                  />
                </div>
                <div className="pos-rel w-50p">
                  <label htmlFor="last-name" className="input-label pos-abs">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="input std-input"
                    id="last-name"
                  />
                </div>
              </div>
            </div>

            <div className="form-layout">
              <label htmlFor="email">Email:</label>
              <input type="text" className="input std-input" id="email" />
            </div>
          </form>
        )}

        {userForm === "project-incharge" && (
          <form>
            <div className="form-layout">
              <label htmlFor="department">Department:</label>
              <select className="input std-input" name="user" id="department">
                <option value="" selected>
                  Select
                </option>
                <option value="student">CSE</option>
                <option value="progress-incharge">IT</option>
                <option value="project-incharge">Mechanical</option>
                <option value="investor">Electronics</option>
              </select>
            </div>

            <div className="form-layout">
              <label htmlFor="name">Name:</label>
              <div className="flex-row align-center gap-1 my-1">
                <div className="pos-rel w-50p">
                  <label htmlFor="first-name" className="input-label pos-abs">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="input std-input"
                    id="first-name"
                  />
                </div>
                <div className="pos-rel w-50p">
                  <label htmlFor="last-name" className="input-label pos-abs">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="input std-input"
                    id="last-name"
                  />
                </div>
              </div>
            </div>

            <div className="form-layout">
              <label htmlFor="email">Email:</label>
              <input type="text" className="input std-input" id="email" />
            </div>
          </form>
        )}

        {userForm === "investor" && (
          <form>
            <div className="form-layout">
              <label htmlFor="name">Name:</label>
              <div className="flex-row align-center gap-1 my-1">
                <div className="pos-rel w-50p">
                  <label htmlFor="first-name" className="input-label pos-abs">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="input std-input"
                    id="first-name"
                  />
                </div>
                <div className="pos-rel w-50p">
                  <label htmlFor="last-name" className="input-label pos-abs">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="input std-input"
                    id="last-name"
                  />
                </div>
              </div>
            </div>

            <div className="form-layout">
              <label htmlFor="email">Email:</label>
              <input type="text" className="input std-input" id="email" />
            </div>
          </form>
        )}
      </main>
    </>
  );
};

export { AddUser };
