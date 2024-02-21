function Nav(props) {
  return (
    <nav className={props.navClass}>
      <ul>
        {props.liElements.map((elem, index) => {
          return <li key={index}>{elem}</li>;
        })}
      </ul>
    </nav>
  );
}

export default Nav;
