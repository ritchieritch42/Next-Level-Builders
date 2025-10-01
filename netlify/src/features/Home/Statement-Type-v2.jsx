import Header from "../../ui/Header";
import Box from "../../ui/Box";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const typesOfWork = [
  {
    id: 1,
    type: "Tenant Improvement",
    image: "oproom2.JPG",
  },
  {
    id: 2,
    type: "Full Building Renovation",
    image: "office1.JPG",
  },
  {
    id: 3,
    type: "Ground Up Construction",
    image: "admin2.JPG",
  },
];

const StyledContainer = styled.div`
  .slick-dots li button:before {
    font-size: 0.75rem;
  }

  .slick-dots {
    margin: 5px 0px 5px 0px;
  }
`;

const StyledCustomSlide = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 33vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

function CustomSlide(typeObject) {
  const { type, image } = typeObject;

  return (
    <StyledCustomSlide key={type} image={image}>
      <Header
        as="h3"
        color="var(--color-tan-100)"
        padding="15px 15px 15px 15px"
        bgColor="var(--color-grey-700)"
        transparency="0.85"
        margin="auto"
        borderRadius="50px"
      >
        {type}
      </Header>
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

function TypeStatement() {
  return (
    <>
      <Box margin="0px 0px 20px 0px">
        <Header color="var(--color-tan-100)" as="h3">
          What We Build
        </Header>
      </Box>
      <StyledContainer>
        <Slider {...settings}>
          {typesOfWork.map((type) => (
            <CustomSlide index={type.id} type={type.type} image={type.image} />
          ))}
        </Slider>
      </StyledContainer>
    </>
  );
}

export default TypeStatement;
