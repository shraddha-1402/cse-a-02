import { ChangeEvent } from "react";
import EditableElement from "../../../components/formElements/EditableElement";

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
            <EditableElement
              title={"Name"}
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            <EditableElement
              title={"Date Of Birth"}
              type="date"
              inputValue={undefined}
              onInputChange={function (e: ChangeEvent<HTMLInputElement>) {
                throw new Error("Function not implemented.");
              }}
            />
            <EditableElement
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
