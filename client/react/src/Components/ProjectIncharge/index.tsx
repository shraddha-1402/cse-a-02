import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";

const ProjectIncharge = () => {
  return (
    <>
      <Navbar link={"/project-incharge"} />
      <main className=" mw-48r m-2 mx-auto">
        <h1 className="left-text m-1">Project Groups</h1>

        <Link to="/project-incharge/pj-project-info" className="link">
          <div className="card p-1 m-1 flex-row justify-spc-bet align-center">
            <div className="flex-col">
              <p className="mb-0-5 md-text text-regular-weight">
                Group: CSE_A_02, Project Approval System
              </p>
              <p className="sm-text primary-text">Approved: Yes</p>
            </div>
            <FaChevronRight className="next-icon" />
          </div>
        </Link>

        <Link to="/project-incharge/pj-project-info" className="link">
          <div className="card p-1 m-1 flex-row justify-spc-bet align-center">
            <div className="flex-col">
              <p className="mb-0-5 md-text text-regular-weight">
                Group: CSE_A_02, Project Approval System
              </p>
              <p className="sm-text primary-text">Approved: Yes</p>
            </div>
            <FaChevronRight className="next-icon" />
          </div>
        </Link>

        <Link to="/project-incharge/pj-project-info" className="link">
          <div className="card p-1 m-1 flex-row justify-spc-bet align-center">
            <div className="flex-col">
              <p className="mb-0-5 md-text text-regular-weight">
                Group: CSE_A_02, Project Approval System
              </p>
              <p className="sm-text primary-text">Approved: No</p>
            </div>
            <FaChevronRight className="next-icon" />
          </div>
        </Link>

        <Link to="/project-incharge/pj-project-info" className="link">
          <div className="card p-1 m-1 flex-row justify-spc-bet align-center">
            <div className="flex-col">
              <p className="mb-0-5 md-text text-regular-weight">
                Group: CSE_A_02, Project Approval System
              </p>
              <p className="sm-text primary-text">Approved: No</p>
            </div>
            <FaChevronRight className="next-icon" />
          </div>
        </Link>
      </main>
    </>
  );
};

export { ProjectIncharge };
