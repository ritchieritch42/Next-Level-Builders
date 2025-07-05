import Link from "../../ui/Link";

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
    <div>
      <Link route={routes.homepage} title={titles.homepage} />
      <Link route={routes.about} title={titles.about} />
      <Link route={routes.projects} title={titles.projects} />
    </div>
  );
}

export default Navbar;
