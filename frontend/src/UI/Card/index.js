import "./index.scss";

const Card = (props) => {
  const classes = "card " + props.className;
  return (
    <div className={classes} onClick={props.onClick} key={props.key}>
      {props.children}
    </div>
  );
};

export default Card;
