import { NavLink } from "react-router";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: var(--color-tan-100);
  font-size: 1.6rem;
  font-weight: 400;
  padding: 1.5rem;
  transition: 0.3s;
  &:hover {
    color: var(--color-tan-300);
  }
`;

function Link({ route, title }) {
  return <StyledLink to={route}>{title}</StyledLink>;
}

export default Link;
