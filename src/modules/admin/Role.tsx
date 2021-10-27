import { ChangeEvent } from "react";
import { ProjectData } from "../../types/main";
import EditableElement from "../../components/formElements/EditableElement";

export default function Role(props: {
  projectData: ProjectData;
  setProjectData: React.Dispatch<React.SetStateAction<ProjectData>>;
  title: string;
}) {
  return (
    <div>
      <h1>{props.title}</h1>
      <form action="">
        <table>
          <tbody>
            <EditableElement
              title={"Username"}
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            <EditableElement
              title={"Stream"}
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            <EditableElement
              title={"Academic year"}
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            <EditableElement
              title={"Semester"}
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            <EditableElement
              title={"Department"}
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            <EditableElement
              title={"Role"}
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
          </tbody>
        </table>
        <button type="submit" className="submit-button">
          Create
        </button>
      </form>
    </div>
  );
}
