import { ProjectData } from "../../../types/main";

export default function DashBoard(props: {
  projectData: ProjectData;
  setProjectData: React.Dispatch<React.SetStateAction<ProjectData>>;
  title: string;
}) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}
