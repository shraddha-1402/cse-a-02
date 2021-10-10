import { ProjectData } from "../../types/main";
import KeyValueElement from "../KeyValueElement";

function ViewProjectDetails(props: {
  projectData: ProjectData;
  title: string;
}) {
  return (
    <>
      <h2 className="pageTitle">{props.title}</h2>
      <table>
        <tbody>
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
        </tbody>
      </table>
    </>
  );
}

export default ViewProjectDetails;
