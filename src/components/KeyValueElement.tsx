export default function KeyValueElement(props: {
  title: string;
  value: string;
}) {
  return (
    <tr className="KeyValueElement">
      <td>
        <label htmlFor={props.title}>{props.title}</label>
      </td>
      <td>
        <span id={props.title}>{props.value}</span>
      </td>
    </tr>
  );
}
