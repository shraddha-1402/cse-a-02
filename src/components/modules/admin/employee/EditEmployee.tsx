import { ChangeEvent } from "react";
import FormElement from "../../../FormElement";

export default function EditEmployee() {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of birth</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>a</td>
            <td>a</td>
          </tr>
          <tr>
            <td>a</td>
            <td>a</td>
            <td>a</td>
          </tr>
        </tbody>
      </table>
      <form action="">
        <button className="submit-button">Select</button>
      </form>
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
              title={"Date of birth"}
              type="date"
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            <FormElement
              title={"E-mail"}
              type="email"
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
          </tbody>
        </table>
        <button className="submit-button">Edit</button>
      </form>
    </>
  );
}
