import "./index.css";
export default function EditableElement(props: {
  title: string;
  type?: React.HTMLInputTypeAttribute;
  min?: number;
  max?: number;
  inputValue: any;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}) {
  return (
    <tr className="EditableElement">
      <td>
        <label htmlFor={props.type === "file" ? "" : props.title}>
          {props.title}
        </label>
      </td>
      <td className={props.type === "file" ? "FileUpload" : ""}>
        <input
          className={props.type === "file" ? "FileUploadInput" : ""}
          type={props.type}
          id={props.title}
          value={props.type === "file" ? "" : props.inputValue}
          min={props.min}
          max={props.max}
          onChange={props.onInputChange}
          required
        />
        {props.type === "file" && (
          <>
            <button>Choose document file</button>
            <br />
            {props.inputValue}
            <br />
          </>
        )}
      </td>
    </tr>
  );
}
