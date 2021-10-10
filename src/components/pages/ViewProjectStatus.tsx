import React from "react";
import { ProjectData } from "../../types/main";
import KeyValueElement from "../KeyValueElement";

export default function ViewProjectStatus(props: {
  title: string;
  projectData: ProjectData;
}) {
  return (
    <>
      <h2 className="pageTitle">{props.title}</h2>
      <table>
        <tbody>
          <KeyValueElement
            title="Name of super guide: "
            value={props.projectData.superGuide}
          />
          <KeyValueElement
            title="Suggestions given by super guide: "
            value={props.projectData.suggestionsBySuperGuide}
          />
          <KeyValueElement
            title="Approved or not: "
            value={props.projectData.approved ? "Yes" : "No"}
          />
          <KeyValueElement
            title="Name of project guide: "
            value={props.projectData.guide}
          />
          <KeyValueElement
            title="Suggestions given by project guide: "
            value={props.projectData.suggestionsByGuide}
          />
        </tbody>
      </table>
    </>
  );
}
