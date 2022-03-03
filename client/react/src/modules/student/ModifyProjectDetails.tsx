import { ChangeEvent, useState } from "react";
import { ProjectData } from "../../types/main";
import EditableElement from "../../components/formElements/EditableElement";

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
            <EditableElement
              title="Name of project: "
              inputValue={formData.name}
              onInputChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <EditableElement
              title="Type of project: "
              inputValue={formData.type}
              onInputChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            />
            <EditableElement
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
            <EditableElement
              title="Cause: "
              inputValue={formData.cause}
              onInputChange={(e) =>
                setFormData({ ...formData, cause: e.target.value })
              }
            />
            <EditableElement
              title="Technologies used: "
              inputValue={formData.techUsed}
              onInputChange={(e) =>
                setFormData({
                  ...formData,
                  techUsed: e.target.value.toString().split(","),
                })
              }
            />
            <EditableElement
              title="doc file: "
              inputValue={props.projectData.docFile}
              type="file"
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            {/* <tr className="EditableElement">
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
        </table>
        <button
          className="submit-button"
          type="submit"
          onClick={(e) => submitHandler(e)}
        >
          Modify
        </button>
      </form>
    </>
  );
}

export default ModifyProjectDetails;
