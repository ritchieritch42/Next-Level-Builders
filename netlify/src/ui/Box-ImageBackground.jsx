import styled from "styled-components";

const StyledBoxImageBackground = styled.div`
  position: relative;
  text-align: center;
`;

function ImageBackgroundBox({ children, ...rest }) {
  return (
    <StyledBoxImageBackground {...rest}>{children}</StyledBoxImageBackground>
  );
}

export default ImageBackgroundBox;
