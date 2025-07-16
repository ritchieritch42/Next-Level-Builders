import { NavLink } from "react-router";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: #000000;
  font-size: 1.3rem;
  font-weight: 400;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s;

  /* &.active {
    box-shadow: ${(props) =>
    props.children === "About"
      ? "inset 120px 0 0 0 var(--color-tan-200)" // shadow from the right
      : "inset -120px 0 0 0 var(--color-tan-200)"};

    color: var(--color-red-500);
  } */
`;

function Link({ route, children }) {
  return <StyledLink to={route}>{children}</StyledLink>;
}

export default Link;
