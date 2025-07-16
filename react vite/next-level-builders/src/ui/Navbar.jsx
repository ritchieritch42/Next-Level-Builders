import styled from "styled-components";
import HorizontalLogo from "./HorizontalLogo";
import Box from "./Box";
import Logo from "./Logo";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import { useState } from "react";

const StyledNavbar = styled.div`
  background-color: var(--color-tan-100);
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 10px;
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledNavbar>
        <Box placement="start">
          <HorizontalLogo />
        </Box>
        <Box placement="end">
          <Box>
            <Logo onClick={() => setIsOpen(!isOpen)}>
              {isOpen && <HiOutlineXMark />}
              {!isOpen && <HiOutlineBars3 />}
            </Logo>
          </Box>
        </Box>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
