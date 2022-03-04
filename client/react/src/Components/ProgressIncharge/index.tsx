import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";

const ProgressIncharge = () => {
  return (
    <>
      <Navbar link={"/progress-incharge"} />
      <main className=" mw-48r m-2 mx-auto">
        <h1 className="left-text m-1">Approved Projects</h1>

        <Link to="/progress-incharge/pg-project-info" className="link">
          <div className="card p-1 m-1 flex-row justify-spc-bet align-center">
            <div className="flex-col">
              <p className="mb-0-5 md-text text-regular-weight">
                Group: CSE_A_02, Project Approval System
              </p>
              <p className="sm-text primary-text">Guide: prof_ashish_sharma</p>
            </div>
            <FaChevronRight className="next-icon" />
          </div>
        </Link>

        <Link to="/progress-incharge/pg-project-info" className="link">
          <div className="card p-1 m-1 flex-row justify-spc-bet align-center">
            <div className="flex-col">
              <p className="mb-0-5 md-text text-regular-weight">
                Group: CSE_A_02, Project Approval System
              </p>
              <p className="sm-text primary-text">Guide: prof_ashish_sharma</p>
            </div>
            <FaChevronRight className="next-icon" />
          </div>
        </Link>

        <Link to="/progress-incharge/pg-project-info" className="link">
          <div className="card p-1 m-1 flex-row justify-spc-bet align-center">
            <div className="flex-col">
              <p className="mb-0-5 md-text text-regular-weight">
                Group: CSE_A_02, Project Approval System
              </p>
              <p className="sm-text primary-text">Guide: prof_ashish_sharma</p>
            </div>
            <FaChevronRight className="next-icon" />
          </div>
        </Link>

        <Link to="/progress-incharge/pg-project-info" className="link">
          <div className="card p-1 m-1 flex-row justify-spc-bet align-center">
            <div className="flex-col">
              <p className="mb-0-5 md-text text-regular-weight">
                Group: CSE_A_02, Project Approval System
              </p>
              <p className="sm-text primary-text">Guide: prof_ashish_sharma</p>
            </div>
            <FaChevronRight className="next-icon" />
          </div>
        </Link>
      </main>
    </>
  );
};

export { ProgressIncharge };
