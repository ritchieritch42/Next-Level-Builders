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

  /* @media screen and (min-width: 550px) {
    svg {
      width: 5vw;
      height: 5vw;
    }
  } */
`;

function Logo({ children, ...rest }) {
  return (
    <StyledLogoWrapper role="button" {...rest}>
      {children}
    </StyledLogoWrapper>
  );
}

export default Logo;
