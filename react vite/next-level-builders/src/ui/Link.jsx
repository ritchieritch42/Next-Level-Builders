import { NavLink } from "react-router";

function Link({ route, title }) {
  return (
    <NavLink to={route} style={{ backgroundColor: "red" }}>
      {title}
    </NavLink>
  );
}

export default Link;
