import styled from "styled-components";

const StyledFixedImage = styled.img`
  width: 100%;
  height: auto;
  filter: ${(props) => `brightness(${props.brightness})`};
`;

function FixedImage({ ...rest }) {
  return <StyledFixedImage {...rest}></StyledFixedImage>;
}

export default FixedImage;
