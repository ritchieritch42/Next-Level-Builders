import styled from "styled-components";

const StyledFixedImage = styled.img`
  width: 100%;
  height: auto;
  filter: ${(props) => `brightness(${props.brightness})`};

  @media screen and (min-width: 1250px) {
    object-fit: contain;
  }
`;

function FixedImage({ ...rest }) {
  return <StyledFixedImage {...rest}></StyledFixedImage>;
}

export default FixedImage;
