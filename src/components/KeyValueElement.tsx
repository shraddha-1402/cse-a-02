export default function KeyValueElement(props: {
  title: string;
  value: string;
}) {
  return (
    <>
      <label htmlFor={props.title}>{props.title}</label>
      <span id={props.title}>{props.value}</span>
      <br />
    </>
  );
}
