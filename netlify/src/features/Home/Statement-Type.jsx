import ImageBackgroundBox from "../../ui/Box-ImageBackground";
import PhotoCarousel from "../../ui/PhotoCarousel";
import Image from "../../ui/Image";
import Box from "../../ui/Box";
import Text from "../../ui/Text";

const typesOfWork = [
  {
    type: "Office Spaces",
    image: "oproom2.JPG",
  },
  {
    type: "Tenant Finish",
    image: "hlwy1.JPG",
  },
  {
    type: "Improvements",
    image: "admin2.JPG",
  },
];

function TypeStatement() {
  return (
    <PhotoCarousel>
      {typesOfWork.map((type) => (
        <Box>
          <Image
            src={type.image}
            width="100%"
            height="auto"
            backgroundsize="contain"
          />
          <Text>{type.type}</Text>
        </Box>
      ))}
    </PhotoCarousel>
  );
}

export default TypeStatement;
