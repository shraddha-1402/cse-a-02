import React from "react";
import { FaChevronLeft, FaFilePdf, FaFilePowerpoint } from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { SiAdobexd } from "react-icons/si";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";

const PJProjectInfo = () => {
  return (
    <>
      <Navbar link={"/project-incharge"} />
      <main className=" mw-54r m-2 mx-auto pos-rel">
        <div className="flex-row justify-spc-bet align-center">
          <div className="flex-row align-center">
            <Link to="/project-incharge" className="link mr-1">
              <button className="btn btn-outline-secondary ">
                <FaChevronLeft />
              </button>
            </Link>
            <h1 className="center-text">CSE_A_02 - Project Approval System</h1>
          </div>
          <div className="flex-row align-center">
            <button
              className="btn btn-solid-primary"
              // onClick={openRatingodal}
            >
              Approve
            </button>
          </div>
        </div>
        <div>
          <div className="form-layout my-1 md-text">
            <p>Members: </p>
            <table className="mt-1">
              <tr>
                <th className="text-regular-weight primary-text">Name</th>
                <th className="text-regular-weight primary-text">Section</th>
                <th className="text-regular-weight primary-text">
                  Roll Number
                </th>
              </tr>
              <tr>
                <td>Shraddha Gupta</td>
                <td>C</td>
                <td>06</td>
              </tr>
              <tr>
                <td>Atharva Upadhye</td>
                <td>A</td>
                <td>37</td>
              </tr>
              <tr>
                <td>Ashutosh Maindalkaar</td>
                <td>A</td>
                <td>35</td>
              </tr>
              <tr>
                <td>Bhavesh Kripal</td>
                <td>A</td>
                <td>42</td>
              </tr>
            </table>
          </div>
          <div className="form-layout my-1 md-text">
            <p>Description: </p>
            <p className="mt-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates a ab eum, reprehenderit officiis exercitationem. Sit ab
              pariatur cupiditate illo quasi id nulla suscipit nisi fuga
              reiciendis illum nostrum atque nihil sunt tempore quos.
            </p>
          </div>
          <div className="form-layout my-1 md-text">
            <p>Progress seminars: </p>
            <div className="mt-1">
              <div className="primary-text my-0-5">2nd progress seminar</div>
              <div className="form-layout mb-1">
                <span>Files: </span>
                <div>
                  <button className="btn btn-outline-secondary p-1 m-0-5">
                    <SiAdobexd className="mr-1" />
                    design.xd
                  </button>
                  <button className="btn btn-outline-secondary p-1 m-0-5">
                    <FaFilePowerpoint className="mr-1" />
                    slides.pptx
                  </button>
                  <button className="btn btn-outline-secondary p-1 m-0-5">
                    <FaFilePdf className="mr-1" />
                    document.pdf
                  </button>
                  <button className="btn btn-outline-secondary p-1 m-0-5">
                    <FaFilePdf className="mr-1" />
                    document-1.pdf
                  </button>
                </div>
                <div>Suggestion:</div>
                <div className="flex-row justify-spc-bet gap-1">
                  <p className="sm-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    dolor animi perspiciatis eligendi.
                  </p>
                </div>
              </div>
              <div className="primary-text my-0-5">1st progress seminar</div>
              <div className="form-layout">
                <span>Files: </span>
                <div>
                  <button className="btn btn-outline-secondary p-1 m-0-5">
                    <FaFilePowerpoint className="mr-1" />
                    slides.pptx
                  </button>
                  <button className="btn btn-outline-secondary p-1 m-0-5">
                    <FaFilePdf className="mr-1" />
                    document.pdf
                  </button>
                </div>
                <div>Suggestion:</div>
                <div className="flex-row justify-spc-bet gap-1">
                  <p className="sm-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    dolor animi perspiciatis eligendi consequuntur explicabo cum
                    numquam a, autem doloremque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-solid-primary chat-button">
          <BsFillChatLeftTextFill /> Chat
        </button>
      </main>
    </>
  );
};

export { PJProjectInfo };
