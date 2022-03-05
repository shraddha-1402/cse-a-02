import React from "react";
import { FaFilePdf, FaFilePowerpoint, FaStar } from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { SiAdobexd } from "react-icons/si";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";

const ProjectGroup = () => {
  return (
    <>
      <Navbar link={"/project-group"} />
      <main className=" mw-54r m-2 mx-auto pos-rel">
        <div className="flex-row justify-spc-bet align-center">
          <div className="flex-row align-center">
            <h1 className="center-text">CSE_A_02</h1>
          </div>
          <Link to="/project-group/update-project-info">
            <button className="btn btn-solid-primary">Update</button>
          </Link>
        </div>
        <div>
          <div className="form-layout my-1 md-text">
            <div>Name: </div>
            <div>Project Approval System</div>
          </div>
          <div className="form-layout my-1 md-text">
            <div>Rating: </div>
            <span className="flex-row my-1 md-text align-center gap-0-25 md-text ">
              <FaStar className="rating-checked" />
              <FaStar className="rating-checked" />
              <FaStar className="rating-checked" />
              <FaStar />
              <FaStar />
            </span>
          </div>
          <div className="form-layout my-1 md-text">
            <div>Guide: </div>
            <div className="flex-row align-center gap-0-25 p-0-5 mr-1">
              Prof. Ashish Sharma
            </div>
          </div>
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
                <div>Suggestions By PI:</div>
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
                <div>Suggestions By PI:</div>
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

export { ProjectGroup };
