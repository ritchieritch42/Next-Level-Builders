import styled from "styled-components";

const StyledLogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => props.cursor};

  svg {
    width: ${(props) => props.width || "10vw"};
    height: ${(props) => props.height || "10vw"};
    fill: ${(props) => props.color || "black"};
  }
`;

function Logo({ children, ...rest }) {
  return (
    <StyledLogoWrapper role="button" {...rest}>
      {children}
    </StyledLogoWrapper>
  );
}

export default Logo;
