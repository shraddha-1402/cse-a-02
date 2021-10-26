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
        <tbody>
          <tr>
            <td rowSpan={4}>856</td>
            <td>member 1</td>
            <td rowSpan={4}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                provident similique ea vero modi, sequi alias nam mollitia.
                Provident ad sequi harum natus itaque placeat explicabo labore
                atque velit! Odio?
              </p>
            </td>
          </tr>
          <tr>
            <td>member 2</td>
          </tr>
          <tr>
            <td>member 3</td>
          </tr>
          <tr>
            <td>member 4</td>
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
                throw new Error("Function not implemented.");
                // console.log(e.target.value);
              }}
            />
          </tbody>
        </table>
        <button className="submit-button">Search</button>
      </form>
    </div>
  );
}
