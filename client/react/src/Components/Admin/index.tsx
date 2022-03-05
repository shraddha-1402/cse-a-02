import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";

const Admin = () => {
  return (
    <>
      <Navbar link={"/admin"} />

      <main className=" mw-48r m-2 mx-auto">
        <div className="flex-row justify-spc-bet align-center p-1">
          <h1 className="center-text">Accounts</h1>
          <Link to="/admin/add-user" className="link">
            <button className="btn btn-solid-primary">Add</button>
          </Link>
        </div>

        <Link to="/admin/acc-info" className="link">
          <div className="card p-1 m-1 flex-row justify-spc-bet align-center">
            <div className="flex-col">
              <p className="mb-0-5 md-text text-regular-weight">
                prof-ashish-sharma
              </p>
              <p className="sm-text primary-text">Project Incharge, CSE</p>
            </div>
            <FaChevronRight className="next-icon" />
          </div>
        </Link>

        <Link to="/admin/acc-info" className="link">
          <div className="card p-1 m-1 flex-row justify-spc-bet align-center">
            <div className="flex-col">
              <p className="mb-0-5 md-text text-regular-weight">
                prof-ashish-sharma
              </p>
              <p className="sm-text primary-text">Project Incharge, CSE</p>
            </div>
            <FaChevronRight className="next-icon" />
          </div>
        </Link>
        <Link to="/admin/acc-info" className="link">
          <div className="card p-1 m-1 flex-row justify-spc-bet align-center">
            <div className="flex-col">
              <p className="mb-0-5 md-text text-regular-weight">
                prof-ashish-sharma
              </p>
              <p className="sm-text primary-text">Project Incharge, CSE</p>
            </div>
            <FaChevronRight className="next-icon" />
          </div>
        </Link>
        <Link to="/admin/acc-info" className="link">
          <div className="card p-1 m-1 flex-row justify-spc-bet align-center">
            <div className="flex-col">
              <p className="mb-0-5 md-text text-regular-weight">
                prof-ashish-sharma
              </p>
              <p className="sm-text primary-text">Project Incharge, CSE</p>
            </div>
            <FaChevronRight className="next-icon" />
          </div>
        </Link>
      </main>
    </>
  );
};

export { Admin };
