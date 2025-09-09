import styled from "styled-components";

const StyledBoxImageBackground = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

function ImageBackgroundBox({ children, ...rest }) {
  return (
    <StyledBoxImageBackground {...rest}>{children}</StyledBoxImageBackground>
  );
}

export default ImageBackgroundBox;
