import { useEffect, useState } from "react";
import { projectDataPreset, user } from "../../constants/preset";
import { ProjectData } from "../../types/main";
import NavBar from "../navBar/NavBar";
import "./../../styles/routes/student/index.css";
import DashBoard from "./admin/DashBoard";
import EditStudentDetails from "./admin/EditStudentDetails";
import Employee from "./admin/employee/Employee";
import Role from "./admin/Role";
import "./admin/style.css";
export default function Admin() {
  const [pageBody, setPageBody] = useState("DashBoard");

  const [projectData, setProjectData] =
    useState<ProjectData>(projectDataPreset);
  useEffect(() => {
    return () => {};
  }, [projectData]);
  const tabList = ["DashBoard", "Employee", "EditStudentDetails", "Role"];
  return (
    <div>
      <NavBar
        pageBody={pageBody}
        setPageBody={setPageBody}
        username={`${user.name.first} ${user.name.last}`}
        tabsList={tabList}
      />
      <div className="admin-body">
        {pageBody === "DashBoard" && (
          <DashBoard
            title={pageBody}
            projectData={projectData}
            setProjectData={setProjectData}
          />
        )}
        {pageBody === "Employee" && (
          <Employee
            title={pageBody}
            projectData={projectData}
            setProjectData={setProjectData}
          />
        )}
        {pageBody === "EditStudentDetails" && (
          <EditStudentDetails
            title={pageBody}
            projectData={projectData}
            setProjectData={setProjectData}
          />
        )}
        {pageBody === "Role" && (
          <Role
            title={pageBody}
            projectData={projectData}
            setProjectData={setProjectData}
          />
        )}
      </div>
    </div>
  );
}
