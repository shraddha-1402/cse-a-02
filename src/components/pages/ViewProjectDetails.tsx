import React from "react";
import { ProjectData } from "../../types/main";
import FormElement from "../FormElement";
import KeyValueElement from "../KeyValueElement";

function ViewProjectDetails(props: {
  projectData: ProjectData;
  title: string;
}) {
  return (
    <>
      <h2 className="pageTitle">{props.title}</h2>
      <KeyValueElement
        title="Name of project: "
        value={props.projectData.name}
      />
      <KeyValueElement
        title="Type of project: "
        value={props.projectData.type}
      />
      <KeyValueElement
        title="Number of members: "
        value={props.projectData.numberOfMembers.toString()}
      />
      <KeyValueElement title="Cause: " value={props.projectData.cause} />
      <KeyValueElement
        title="Technologies used: "
        value={props.projectData.techUsed.toString()}
      />
    </>
  );
}

export default ViewProjectDetails;
