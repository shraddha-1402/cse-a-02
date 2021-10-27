import { useState } from "react";
import { ProjectData } from "../../../../types/main";
import TabBar from "../../../navBar/TabBar";
import AddEmployee from "./AddEmployee";
import DeleteEmployee from "./DeleteEmployee";
import EditEmployee from "./EditEmployee";

export default function Employee(props: {
  projectData: ProjectData;
  setProjectData: React.Dispatch<React.SetStateAction<ProjectData>>;
  title: string;
}) {
  const tabsList = ["AddEmployee", "EditEmployee", "DeleteEmployee"];
  const [employeeFunction, setEmployeeFunction] = useState(tabsList[0]);
  return (
    <div>
      <h1>{props.title}</h1>
      <TabBar
        tabsList={tabsList}
        pageBody={employeeFunction}
        setPageBody={setEmployeeFunction}
      />
      {employeeFunction === "AddEmployee" && <AddEmployee />}
      {employeeFunction === "EditEmployee" && <EditEmployee />}
      {employeeFunction === "DeleteEmployee" && <DeleteEmployee />}
    </div>
  );
}
