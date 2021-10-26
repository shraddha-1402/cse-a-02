import { ChangeEvent } from "react";
import FormElement from "../../../FormElement";

export default function AddEmployee() {
  return (
    <form action="">
      <table>
        <tbody>
          <FormElement
            title={"Name"}
            inputValue={undefined}
            onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
              throw new Error("Function not implemented.");
            }}
          />
          <FormElement
            title={"Date Of Birth"}
            inputValue={undefined}
            type={"date"}
            onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
              throw new Error("Function not implemented.");
            }}
          />
          <FormElement
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
