import styled from "styled-components";
import Link from "../../ui/Link";

const StyledNavbar = styled.div`
  background-color: var(--color-red-400);
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
