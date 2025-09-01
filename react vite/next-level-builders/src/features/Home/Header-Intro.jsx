import Header from "../../ui/Header";
import Box from "../../ui/Box";
import Card from "../../ui/Card";
import FixedImage from "../../ui/Image-Fixed";
import ImageBackgroundBox from "../../ui/Box-ImageBackground";
import TextOverlay from "../../ui/Text-Overlay";

function IntroHeader() {
  return (
    <>
      <ImageBackgroundBox>
        <FixedImage
          alt="BVD Phase 1 Reception Desk.jpg"
          src="BVD Phase 1 Reception Desk.jpg"
          brightness="60%"
        />
        <TextOverlay>
          <Header color="var(--color-tan-100)" as="h1">
            Experience.
          </Header>
          <Header color="var(--color-tan-100)" as="h1">
            Dependability.
          </Header>
          <Header color="var(--color-tan-100)" as="h1">
            Results.
          </Header>
        </TextOverlay>
      </ImageBackgroundBox>
    </>
  );
}

export default IntroHeader;
