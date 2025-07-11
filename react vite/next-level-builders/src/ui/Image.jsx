import styled from "styled-components";

const StyledImage = styled.img`
  width: ${(props) => props.width};
  height: auto;
  padding: 10px;
  border-radius: ${(props) => props.borderradius};
`;

function Image({ ...rest }) {
  return <StyledImage {...rest}></StyledImage>;
}

export default Image;
