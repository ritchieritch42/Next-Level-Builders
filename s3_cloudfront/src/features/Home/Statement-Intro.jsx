import Header from "../../ui/Header";
import Text from "../../ui/Text";
import FixedImage from "../../ui/Image-Fixed";
import ImageBackgroundBox from "../../ui/Box-ImageBackground";
import TextOverlay from "../../ui/Text-Overlay";
import Box from "../../ui/Box";

function IntroHeader() {
  return (
    <Box>
      <ImageBackgroundBox>
        <FixedImage
          alt="BVD Phase 1 Reception Desk.jpg"
          src="BVD Phase 1 Reception Desk.jpg"
          brightness="40%"
        />
        <TextOverlay width="90%">
          <Header
            color="var(--color-tan-100)"
            as="h1"
            textcase="upper"
            shadow="0 0 3px #333333"
            fontWeight="700"
            font="domine"
            fontSize="1.85rem"
          >
            We provide construction services in the Kansas City metro area
          </Header>
          <Text
            colorGradient="linear-gradient(to bottom, var(--color-secondary), #4e0808)"
            bgColor="var(--color-secondary)"
            margin="10px"
            padding="20px"
          >
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "var(--color-tan-100" }}
            >
              Start Planning Your Build
            </a>
          </Text>
        </TextOverlay>
      </ImageBackgroundBox>
    </Box>
  );
}

export default IntroHeader;
