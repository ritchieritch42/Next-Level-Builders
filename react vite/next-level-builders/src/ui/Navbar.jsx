import styled from "styled-components";
import HorizontalLogo from "./HorizontalLogo";
import Box from "./Box";
import Logo from "./Logo";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import { useState } from "react";
import Link from "./Link";

const StyledNavbar = styled.div`
  background-color: var(--color-tan-100);
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 8px;
`;

const StyledDropDown = styled.div`
  background-color: var(--color-tan-100);
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 1s;

  grid-template-rows: ${(props) => props.isOpen && "1fr"};
`;

const linkRoutes = [
  {
    route: "/",
    title: "Home",
  },
  {
    route: "/about",
    title: "About",
  },
  {
    route: "/projects",
    title: "Projects",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledNavbar isOpen={isOpen}>
        <Box stack="horizontal" placement="evenly">
          <HorizontalLogo />
          <Logo onClick={() => setIsOpen(!isOpen)}>
            {isOpen && <HiOutlineXMark />}
            {!isOpen && <HiOutlineBars3 />}
          </Logo>
        </Box>
      </StyledNavbar>
      {isOpen && (
        <StyledDropDown id="menuOptions" isOpen={isOpen}>
          <Box placement="center" stack="vertical">
            {linkRoutes.map((link) => (
              <Link key={link.route} route={link.route} setIsOpen={setIsOpen}>
                {link.title}
              </Link>
            ))}
          </Box>
        </StyledDropDown>
      )}
    </>
  );
}

export default Navbar;
