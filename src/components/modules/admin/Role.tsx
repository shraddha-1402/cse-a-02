import { ChangeEvent } from "react";
import { ProjectData } from "../../../types/main";
import FormElement from "../../FormElement";

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
            <FormElement
              title={"Username"}
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            <FormElement
              title={"Stream"}
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            <FormElement
              title={"Academic year"}
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            <FormElement
              title={"Semester"}
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            <FormElement
              title={"Department"}
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            <FormElement
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
