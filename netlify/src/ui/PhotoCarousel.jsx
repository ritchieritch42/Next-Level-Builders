import styled from "styled-components";

const StyledPhotoCarousel = styled.div`
  background-color: var(--color-base);
`;

function PhotoCarousel({ children, ...rest }) {
  return <StyledPhotoCarousel {...rest}>{children}</StyledPhotoCarousel>;
}

export default PhotoCarousel;
