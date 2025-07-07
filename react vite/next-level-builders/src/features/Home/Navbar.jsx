import styled from "styled-components";
import HorizontalLogo from "../../ui/Logo";
import Box from "../../ui/Box";
import { HiOutlineBars3 } from "react-icons/hi2";

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
  return (
    <>
      <StyledNavbar>
        <Box placement="start">
          <HorizontalLogo />
        </Box>
        <Box placement="end">
          <Box>
            <HiOutlineBars3 />
          </Box>
        </Box>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
