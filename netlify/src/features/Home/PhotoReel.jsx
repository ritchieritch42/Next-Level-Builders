import Text from "../../ui/Text";
import Box from "../../ui/Box";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const typesOfWork = [
  {
    id: 1,
    image: "oproom2.JPG",
  },
  {
    id: 2,
    image: "office1.JPG",
  },
  {
    id: 3,
    image: "admin2.JPG",
  },
  {
    id: 4,
    image: "admin1.JPG",
  },
  {
    id: 5,
    image: "rcptn2.JPG",
  },
];

const StyledContainer = styled.div`
  .slick-dots li button:before {
    font-size: 1rem;
  }

  .slick-dots {
    margin: 40px 0px 0px 0px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px; /* <--- Apply border-radius directly to the image */
`;

const StyledCustomSlide = styled.div`
  height: 30vh;
  padding: 0 10px;
`;

function CustomSlide(typeObject) {
  const { type, image } = typeObject;

  return (
    <StyledCustomSlide key={type}>
      <StyledImage src={image} alt={`Work type ${type}`} />
    </StyledCustomSlide>
  );
}

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function PhotoReel() {
  return (
    <>
      <StyledContainer>
        <Slider {...settings}>
          {typesOfWork.map((type) => (
            <CustomSlide index={type.id} type={type.type} image={type.image} />
          ))}
        </Slider>
      </StyledContainer>
      <Box margin="30px 0px 10px 0px">
        <Text fontstyle="italic" color="var(--color-tan-100)">
          (Blue Valley Dermatology Phase One)
        </Text>
      </Box>
    </>
  );
}

export default PhotoReel;
