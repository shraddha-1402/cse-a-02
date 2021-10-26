import { ChangeEvent } from "react";
import { ProjectData } from "../../../types/main";
import FormElement from "../../FormElement";

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
        <tbody style={{ backgroundColor: "white" }}>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
          </tr>
        </tbody>
      </table>
      <form action="">
        <table>
          <tbody>
            <FormElement
              title={"Group number"}
              inputValue={undefined}
              type="number"
              min={0}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                // throw new Error("Function not implemented.");
                console.log(e.target.value);
              }}
            />
          </tbody>
        </table>
        <button className="submit-button">Search</button>
      </form>
    </div>
  );
}
