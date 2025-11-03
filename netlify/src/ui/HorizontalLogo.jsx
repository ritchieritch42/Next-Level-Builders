import styled from "styled-components";

const StyledHorizontalLogo = styled.img`
  width: 65vw;
  height: auto;
  padding: 5px;
  background-color: var(--color-tan-100);

  @media screen and (min-width: 550px) {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
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
