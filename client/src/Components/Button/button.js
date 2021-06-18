function Button(props) {
  return (
    <a
      name={props.name}
      href={props.link}
      class="btn-mix"
      data-text={props.text}
    >
      {props.text}
    </a>
  );
}
export default Button;
