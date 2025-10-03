import CommitmentHeader from "../features/Home/Statement-Commit";
import IntroHeader from "../features/Home/Header-Intro";
import TypeStatement from "../features/Home/Statement-Type";
import HowStatement from "../features/Home/Statement-How";
import ContactStatement from "../features/Home/Statement-Contact";
import PhotoReel from "../features/Home/PhotoReel";

function Homepage() {
  return (
    <>
      <CommitmentHeader />
      <TypeStatement />
      <PhotoReel />
      <HowStatement />
      <ContactStatement />
    </>
  );
}

export default Homepage;
