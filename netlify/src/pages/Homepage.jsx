import IntroHeader from "../features/Home/Statement-Intro";
import TypeStatement from "../features/Home/Statement-Type";
import HowStatement from "../features/Home/Statement-How";
import ContactStatement from "../features/Home/Statement-Contact";
import PhotoReel from "../features/Home/PhotoReel";
import ReviewStatement from "../features/Home/Statement-Review";
import Box from "../ui/Box";

function Homepage() {
  return (
    <>
      <IntroHeader />
      <TypeStatement />
      <HowStatement />
      <PhotoReel />
      <ReviewStatement />
      <ContactStatement />
    </>
  );
}

export default Homepage;
