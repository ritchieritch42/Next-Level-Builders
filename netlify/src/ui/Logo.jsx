import styled from "styled-components";

const StyledLogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => props.cursor};
  width: 50px;

  svg {
    width: ${(props) => props.width || "50px"};
    height: ${(props) => props.height || "50px"};
    fill: ${(props) => props.color || "black"};
  }

  @media screen and (min-width: 750px) {
    svg {
      width: 40px;
      height: 40px;
    }
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
