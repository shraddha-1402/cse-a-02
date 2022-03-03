import { useEffect, useState } from "react";
import { projectDataPreset, user } from "../../constants/preset";
import { ProjectData } from "../../types/main";
import NavBar from "../../components/navBar/NavBar";
import "./style.css";
import DashBoard from "./DashBoard";
import EditStudentDetails from "./EditStudentDetails";
import Employee from "./employee/Employee";
import Role from "./Role";
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
