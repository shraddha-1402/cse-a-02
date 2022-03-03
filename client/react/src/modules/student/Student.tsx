import { useEffect, useState } from "react";
import { projectDataPreset, user } from "../../constants/preset";
import { ProjectData } from "../../types/main";
import NavBar from "../../components/navBar/NavBar";
import ModifyProjectDetails from "./ModifyProjectDetails";
import UploadProjectDetails from "./UploadProjectDetails";
import ViewProjectDetails from "./ViewProjectDetails";
import ViewProjectStatus from "./ViewProjectStatus";
import "./index.css";
export function Student() {
  const [pageBody, setPageBody] = useState("ModifyProjectDetails");

  const [projectData, setProjectData] =
    useState<ProjectData>(projectDataPreset);
  useEffect(() => {
    return () => {};
  }, [projectData]);
  return (
    <div>
      <NavBar
        pageBody={pageBody}
        setPageBody={setPageBody}
        username={`${user.name.first} ${user.name.last}`}
        tabsList={[
          "ModifyProjectDetails",
          "UploadProjectDetails",
          "ViewProjectDetails",
          "ViewProjectStatus",
        ]}
      />
      {pageBody === "ModifyProjectDetails" && (
        <ModifyProjectDetails
          title={"Modify Project Details"}
          projectData={projectData}
          setProjectData={setProjectData}
        />
      )}
      {pageBody === "UploadProjectDetails" && (
        <UploadProjectDetails
          title="Upload Project Details"
          setProjectData={setProjectData}
        />
      )}
      {pageBody === "ViewProjectDetails" && (
        <ViewProjectDetails
          title={"View Project Details"}
          projectData={projectData}
        />
      )}
      {pageBody === "ViewProjectStatus" && (
        <ViewProjectStatus
          title={"View Project Status"}
          projectData={projectData}
        />
      )}
    </div>
  );
}
