import { ChangeEvent } from "react";
import EditableElement from "../../../components/formElements/EditableElement";

export default function AddEmployee() {
  return (
    <form action="">
      <table>
        <tbody>
          <EditableElement
            title={"Name"}
            inputValue={undefined}
            onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
              throw new Error("Function not implemented.");
            }}
          />
          <EditableElement
            title={"Date Of Birth"}
            inputValue={undefined}
            type={"date"}
            onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
              throw new Error("Function not implemented.");
            }}
          />
          <EditableElement
            title={"Email"}
            inputValue={undefined}
            type="email"
            onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
              throw new Error("Function not implemented.");
            }}
          />
        </tbody>
      </table>
      <button type="submit" className="submit-button">
        Add
      </button>
    </form>
  );
}
