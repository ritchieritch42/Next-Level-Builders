import Header from "../../ui/Header";
import Text from "../../ui/Text";
import FixedImage from "../../ui/Image-Fixed";
import ImageBackgroundBox from "../../ui/Box-ImageBackground";
import TextOverlay from "../../ui/Text-Overlay";

function CommitmentHeader() {
  return (
    <>
      <ImageBackgroundBox>
        <FixedImage
          alt="BVD Phase 1 Reception Desk.jpg"
          src="BVD Phase 1 Reception Desk.jpg"
          brightness="60%"
        />
        <TextOverlay>
          <Header color="var(--color-tan-100)" as="h3">
            We provide construction services in the Kansas City metro area.
          </Header>
          <Text bgColor="var(--color-secondary)" margin="10px" padding="20px">
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "var(--color-tan-100" }}
            >
              START PLANNING YOUR BUILD
            </a>
          </Text>
        </TextOverlay>
      </ImageBackgroundBox>
    </>
  );
}

export default CommitmentHeader;
