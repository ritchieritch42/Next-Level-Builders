import styled from "styled-components";

const StyledLogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => props.cursor};

  svg {
    width: 10vw;
    height: 10vw;
    fill: ${(props) => props.color || "black"};
  }
`;

function Logo({ children, onClick, color, cursor }) {
  return (
    <StyledLogoWrapper
      role="button"
      onClick={onClick}
      color={color}
      cursor={cursor}
    >
      {children}
    </StyledLogoWrapper>
  );
}

export default Logo;
