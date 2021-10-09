import { useState } from "react";
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
  }
  return (
    <>
      <h2 className="pageTitle">{props.title}</h2>
      <form action="">
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
        <button type="submit" onClick={(e) => submitHandler(e)}>
          Modify
        </button>
      </form>
    </>
  );
}

export default ModifyProjectDetails;
