import styled from "styled-components";

const StyledBoxImageBackground = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 1000px;
`;

function ImageBackgroundBox({ children, ...rest }) {
  return (
    <StyledBoxImageBackground {...rest}>{children}</StyledBoxImageBackground>
  );
}

export default ImageBackgroundBox;
