import styled from "styled-components";

const StyledLogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 10vw;
    height: 10vw;
    fill: ${(props) => props.color || "black"};
  }
`;

function Logo({ children, onClick, color }) {
  return (
    <StyledLogoWrapper role="button" onClick={onClick} color={color}>
      {children}
    </StyledLogoWrapper>
  );
}

export default Logo;
