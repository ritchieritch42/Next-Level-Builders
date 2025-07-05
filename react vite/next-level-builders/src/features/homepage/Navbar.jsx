import styled from "styled-components";
import Link from "../../ui/Link";

const StyledNavbar = styled.div`
  background-color: var(--color-red-400);
  height: 7.5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

function Navbar() {
  const routes = {
    homepage: "/",
    about: "/about",
    projects: "/projects",
  };

  const titles = {
    homepage: "Homepage",
    about: "About",
    projects: "Projects",
  };

  return (
    <StyledNavbar>
      <Link route={routes.homepage} title={titles.homepage} />
      <Link route={routes.about} title={titles.about} />
      <Link route={routes.projects} title={titles.projects} />
    </StyledNavbar>
  );
}

export default Navbar;
