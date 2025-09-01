import styled from "styled-components";

const StyledHorizontalLogo = styled.img`
  width: 65vw;
  height: auto;
  padding: 5px;
  background-color: var(--color-tan-100);
`;

function HorizontalLogo() {
  return (
    <StyledHorizontalLogo
      alt="Next Level Builders Logo"
      src="/NL_Horizontal_RGB (1).png"
    />
  );
}

export default HorizontalLogo;
