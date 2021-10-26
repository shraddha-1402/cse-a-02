import { ProjectData } from "../../../types/main";

export default function DashBoard(props: {
  projectData: ProjectData;
  setProjectData: React.Dispatch<React.SetStateAction<ProjectData>>;
  title: string;
}) {
  return (
    <div className="admin-dashboard">
      <h1>{props.title}</h1>
      <table>
        <thead>
          <tr>
            <th>Group number</th>
            <th>Group member(s)</th>
            <th>Project title and details</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
