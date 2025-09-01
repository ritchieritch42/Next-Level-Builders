import styled from "styled-components";

const StyledLogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 10vw;
    height: 10vw;
    fill: black;
  }
`;

function Logo({ children, onClick }) {
  return (
    <StyledLogoWrapper role="button" onClick={onClick}>
      {children}
    </StyledLogoWrapper>
  );
}

export default Logo;
