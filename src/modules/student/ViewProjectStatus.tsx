import React from "react";
import { ProjectData } from "../../types/main";
import ConstantElement from "../../components/formElements/ConstantElement";

export default function ViewProjectStatus(props: {
  title: string;
  projectData: ProjectData;
}) {
  return (
    <>
      <h2 className="pageTitle">{props.title}</h2>
      <form action="">
        <table>
          <tbody>
            <ConstantElement
              title="Name of super guide: "
              value={props.projectData.superGuide}
            />
            <ConstantElement
              title="Suggestions given by super guide: "
              value={props.projectData.suggestionsBySuperGuide}
            />
            <ConstantElement
              title="Approved or not: "
              value={props.projectData.approved ? "Yes" : "No"}
            />
            <ConstantElement
              title="Name of project guide: "
              value={props.projectData.guide}
            />
            <ConstantElement
              title="Suggestions given by project guide: "
              value={props.projectData.suggestionsByGuide}
            />
          </tbody>
        </table>
      </form>
    </>
  );
}
