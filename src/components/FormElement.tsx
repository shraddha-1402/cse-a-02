export default function FormElement(props: {
  title: string;
  type?: React.HTMLInputTypeAttribute;
  min?: number;
  max?: number;
  inputValue: any;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}) {
  return (
    <div>
      <label htmlFor={props.title}>{props.title}</label>
      <input
        type={props.type}
        id={props.title}
        value={props.inputValue}
        min={props.min}
        max={props.max}
        onChange={props.onInputChange}
        required
      />
    </div>
  );
}
