import styled from "styled-components";

const StyledImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderradius};
  background-size: ${(props) => props.backgroundsize};
  filter: ${(props) => `brightness(${props.brightness})`};
`;

function Image({ ...rest }) {
  return <StyledImage {...rest}></StyledImage>;
}

export default Image;
