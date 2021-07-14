function Button(props) {
  return (
    <a
      name={props.name}
      href={props.link}
      className="btn-mix"
      data-text={props.text}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </a>
  );
}
export default Button;
