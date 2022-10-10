import "./index.scss";

const Input = (props) => {
  return (
    <div className="control">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        accept={props.accept}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
