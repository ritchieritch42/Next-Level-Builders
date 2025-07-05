import { NavLink } from "react-router";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: var(--color-tan-100);
  font-size: 1.3rem;
  font-weight: 400;
  transition: 0.3s;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;

  &.active {
    color: var(--color-red-500);
    background-color: var(--color-tan-300);
  }
`;

function Link({ route, title }) {
  return <StyledLink to={route}>{title}</StyledLink>;
}

export default Link;
