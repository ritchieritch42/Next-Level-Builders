import { NavLink, useLocation } from "react-router";
import styled, { css } from "styled-components";

const StyledLink = styled(NavLink)`
  color: var(--color-tan-100);
  font-size: 1.3rem;
  font-weight: 400;
  text-decoration: none;
  margin: 5px;
  transition: 0.5s;

  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      border-bottom: 2px solid var(--color-red-500);
    `}
`;

function Link({ route, children, setIsOpen }) {
  const location = useLocation();
  const isActive = location.pathname === route;

  return (
    <StyledLink
      to={isActive ? "#" : route}
      $disabled={isActive}
      onClick={(e) => {
        if (isActive) e.preventDefault();
        setIsOpen(false);
      }}
    >
      {children}
    </StyledLink>
  );
}

export default Link;
