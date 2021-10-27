import "./index.css";
export default function ConstantElement(props: {
  title: string;
  value: string;
}) {
  return (
    <tr className="ConstantElement">
      <td>
        <label htmlFor={props.title}>{props.title}</label>
      </td>
      <td>
        <span id={props.title}>{props.value}</span>
      </td>
    </tr>
  );
}
