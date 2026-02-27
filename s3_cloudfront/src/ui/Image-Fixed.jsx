import styled from "styled-components";

const StyledFixedImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  filter: ${(props) => `brightness(${props.brightness})`};
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 800px) {
    object-fit: contain;
    margin-top: 30px;
    border-radius: 10px;
  }

  @media screen and (min-width: 1250px) {
    object-fit: contain;
    margin-top: 30px;
    border-radius: 10px;
    max-width: 1250px;
  }
`;

function FixedImage({ ...rest }) {
  return <StyledFixedImage {...rest}></StyledFixedImage>;
}

export default FixedImage;
