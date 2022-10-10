import "./index.scss";

const Button = (props) => {
  const classes = "button " + props.className;
  return (
    <button
      type={props.type || "button"}
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
