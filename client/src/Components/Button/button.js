function Button(props) {
  return (
    <a
      name={props.name}
      href={props.link}
      className="btn-mix"
      data-text={props.text}
    >
      {props.text}
    </a>
  );
}
export default Button;
