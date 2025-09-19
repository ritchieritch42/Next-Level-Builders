import Text from "../../ui/Text";
import Header from "../../ui/Header";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const typesOfWork = [
  {
    id: 1,
    type: "Office Spaces",
    image: "oproom2.JPG",
  },
  {
    id: 2,
    type: "Tenant Finish",
    image: "office1.JPG",
  },
  {
    id: 3,
    type: "Improvements",
    image: "admin2.JPG",
  },
];

const StyledCustomSlide = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 40vh;
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
        margin="0px 0px 20px 0px"
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
    <div>
      <Slider {...settings}>
        {typesOfWork.map((type) => (
          <CustomSlide index={type.id} type={type.type} image={type.image} />
        ))}
      </Slider>
    </div>
  );
}

export default TypeStatement;
