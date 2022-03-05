import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Admin } from "./Components/Admin";
import { AccountInfo } from "./Components/Admin/AccountInfo";
import { ProgressIncharge } from "./Components/ProgressIncharge";
import { AddUser } from "./Components/Admin/AddUser";
import { PGProjectInfo } from "./Components/ProgressIncharge/PGProjectInfo";
import { ProjectIncharge } from "./Components/ProjectIncharge";
import { PJProjectInfo } from "./Components/ProjectIncharge/PJProjectInfo";
import { ProjectGroup } from "./Components/ProjectGroup";
import { UpdateProjectInfo } from "./Components/ProjectGroup/UpdateProjectInfo";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/acc-info" element={<AccountInfo />} />
        <Route path="/admin/add-user" element={<AddUser />} />
        <Route path="/progress-incharge" element={<ProgressIncharge />} />
        <Route
          path="/progress-incharge/pg-project-info"
          element={<PGProjectInfo />}
        />
        <Route path="/project-incharge" element={<ProjectIncharge />} />
        <Route
          path="/project-incharge/pj-project-info"
          element={<PJProjectInfo />}
        />
        <Route path="/project-group" element={<ProjectGroup />} />
        <Route
          path="/project-group/update-project-info"
          element={<UpdateProjectInfo />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
