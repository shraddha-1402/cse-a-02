import { ProjectData } from "../../types/main";
import ConstantElement from "../../components/formElements/ConstantElement";

function ViewProjectDetails(props: {
  projectData: ProjectData;
  title: string;
}) {
  return (
    <>
      <h2 className="pageTitle">{props.title}</h2>
      <form action="">
        <table>
          <tbody>
            <ConstantElement
              title="Name of project: "
              value={props.projectData.name}
            />
            <ConstantElement
              title="Type of project: "
              value={props.projectData.type}
            />
            <ConstantElement
              title="Number of members: "
              value={props.projectData.numberOfMembers.toString()}
            />
            <ConstantElement title="Cause: " value={props.projectData.cause} />
            <ConstantElement
              title="Technologies used: "
              value={props.projectData.techUsed.toString()}
            />
          </tbody>
        </table>
      </form>
    </>
  );
}

export default ViewProjectDetails;
