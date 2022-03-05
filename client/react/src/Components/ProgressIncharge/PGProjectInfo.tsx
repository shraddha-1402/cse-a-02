import React, { useState } from "react";
import {
  FaChevronLeft,
  FaEdit,
  FaFilePdf,
  FaFilePowerpoint,
  FaStar,
} from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";

const modalTypes = {
  Rating: "rating",
  Suggestion: "suggestion",
};

const PGProjectInfo = () => {
  // const openRatingModal = () => {};
  // const openSuggestionModal = () => {};

  const [showModal, setShowModal] = useState("");

  return (
    <>
      <Navbar link={"/progress-incharge"} />
      <main className=" mw-54r m-2 mx-auto">
        <div className="flex-row justify-spc-bet align-center p-1">
          <div className="flex-row align-center">
            <Link to="/progress-incharge" className="link">
              <button className="btn btn-outline-secondary p-1 mr-1 mb-1">
                <FaChevronLeft />
              </button>
            </Link>
            <h1 className="center-text">CSE_A_02 - Project Approval System</h1>
          </div>
          <div className="flex-row align-center">
            <span className="flex-row align-center gap-0-25 md-text p-0-5 mr-1">
              3 <FaStar className="rating-checked" />
            </span>
            <button
              className="btn btn-solid-primary"
              onClick={() => setShowModal(modalTypes.Rating)}
            >
              Rate
            </button>
          </div>
        </div>
        <div>
          <div className="form-layout my-1 md-text">
            <p>Guide Name: </p>
            <p>Prof. Ashish Sharma</p>
          </div>

          <div className="form-layout my-1 md-text">
            <p>Members: </p>
            <table>
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates a ab eum, reprehenderit officiis exercitationem. Sit ab
              pariatur cupiditate illo quasi id nulla suscipit nisi fuga
              reiciendis illum nostrum atque nihil sunt tempore quos.
            </p>
          </div>

          <div className="form-layout my-1 md-text">
            <p>Progress seminars: </p>
            <div>
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
                  <textarea
                    className="w-100p sm-text"
                    disabled={true}
                    placeholder="Type Suggestion here by clicking the edit button ->"
                  ></textarea>
                  <div>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setShowModal(modalTypes.Suggestion)}
                    >
                      <FaEdit />
                    </button>
                  </div>
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
                  <textarea className="w-100p sm-text" disabled={true}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    dolor animi perspiciatis eligendi consequuntur explicabo cum
                    numquam a, autem doloremque.
                  </textarea>
                  <div>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setShowModal(modalTypes.Suggestion)}
                    >
                      <FaEdit />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showModal === modalTypes.Rating && (
        <>
          <div className="z-1 overlay pos-fixed" id="disable-bg"></div>
          <div className="modal-box z-2" id="modal-box">
            <h2 className="m-0-5 mx-1">Rating</h2>
            <div className="flex-row gap-0-5 mx-1 mt-0-5 xl-text">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex mt-1 mx-1">
              <button
                className="btn btn-outline-secondary modal-action-btn m-0-5"
                onClick={() => setShowModal("")}
              >
                Cancel
              </button>
              <button
                className="btn btn-solid-primary modal-action-btn m-0-5"
                onClick={() => setShowModal("")}
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}

      {showModal === modalTypes.Suggestion && (
        <>
          <div className="z-1 overlay pos-fixed" id="disable-bg"></div>
          <div className="modal-box z-2" id="modal-box">
            <h2 className="m-0-5 mx-1">Suggestion</h2>
            <textarea
              name="suggestion"
              id="suggestion-text"
              className="mx-1 mt-0-5"
              cols={30}
              placeholder="Write Suggestions Here"
            ></textarea>
            <div className="flex mt-1 mx-1">
              <button
                className="btn btn-outline-secondary modal-action-btn m-0-5"
                onClick={() => setShowModal("")}
              >
                Cancel
              </button>
              <button
                className="btn btn-solid-primary modal-action-btn m-0-5"
                onClick={() => setShowModal("")}
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export { PGProjectInfo };
