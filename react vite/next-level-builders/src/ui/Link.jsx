import { NavLink, useLocation } from "react-router";
import styled, { css } from "styled-components";

const StyledLink = styled(NavLink)`
  color: #000000;
  font-size: 1.3rem;
  font-weight: 400;
  text-decoration: none;
  padding: 5px;
  transition: 0.5s;

  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      border-bottom: 2px solid var(--color-red-500);
    `}
`;

function Link({ route, children }) {
  const location = useLocation();
  const isActive = location.pathname === route;

  return (
    <StyledLink
      to={isActive ? "#" : route}
      $disabled={isActive}
      onClick={(e) => isActive && e.preventDefault()}
    >
      {children}
    </StyledLink>
  );
}

export default Link;
