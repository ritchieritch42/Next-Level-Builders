import styled from "styled-components";
import HorizontalLogo from "./HorizontalLogo";
import Box from "./Box";
import Logo from "./Logo";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import { useState } from "react";
import Link from "./Link";

const StyledNavbar = styled.div`
  background-color: var(--color-tan-100);
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 8px;
`;

const StyledDropDown = styled.div`
  background-color: var(--color-tan-100);
  height: 15vh;
`;

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
        <StyledDropDown>
          <Box placement="center" stack="vertical">
            <Link route="/">Home</Link>
            <Link route="/about">About</Link>
            <Link route="/projects">Projects</Link>
          </Box>
        </StyledDropDown>
      )}
    </>
  );
}

export default Navbar;
