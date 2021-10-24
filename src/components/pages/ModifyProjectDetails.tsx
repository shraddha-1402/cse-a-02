import { ChangeEvent, useState } from "react";
import { ProjectData } from "../../types/main";
import "../../styles/App.css";
import FormElement from "../FormElement";
function ModifyProjectDetails(props: {
  projectData: ProjectData;
  setProjectData: React.Dispatch<React.SetStateAction<ProjectData>>;
  title: string;
}) {
  const [formData, setFormData] = useState(props.projectData);
  function submitHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    props.setProjectData(formData);
    alert("Form submitted");
  }
  return (
    <>
      <h2 className="pageTitle">{props.title}</h2>
      <form action="">
        <table>
          <tbody>
            <FormElement
              title="Name of project: "
              inputValue={formData.name}
              onInputChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <FormElement
              title="Type of project: "
              inputValue={formData.type}
              onInputChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            />
            <FormElement
              title="Number of members: "
              type={"number"}
              inputValue={formData.numberOfMembers}
              min={1}
              max={formData.rules.maxMembers}
              onInputChange={(e) =>
                setFormData({
                  ...formData,
                  numberOfMembers: Number(e.target.value),
                })
              }
            />
            <FormElement
              title="Cause: "
              inputValue={formData.cause}
              onInputChange={(e) =>
                setFormData({ ...formData, cause: e.target.value })
              }
            />
            <FormElement
              title="Technologies used: "
              inputValue={formData.techUsed}
              onInputChange={(e) =>
                setFormData({
                  ...formData,
                  techUsed: e.target.value.toString().split(","),
                })
              }
            />
            <FormElement
              title="doc file: "
              inputValue={props.projectData.docFile}
              type="file"
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            {/* <tr className="FormElement">
              <td>
                <label htmlFor="docFile">doc file: </label>
              </td>
              <td className="FileUpload">
                <input className="FileUploadInput" type="file" id="docFile" />
                <button>Choose document file</button>
                <br />
                {props.projectData.docFile}
              </td>
            </tr> */}
          </tbody>
          <tbody>
            <button
              className="submit-button"
              type="submit"
              onClick={(e) => submitHandler(e)}
            >
              Modify
            </button>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default ModifyProjectDetails;
