import CommitmentHeader from "../features/Home/Statement-Commit";
import IntroHeader from "../features/Home/Header-Intro";
import SimpleSlider from "../features/Home/Statement-Type";
import HowStatement from "../features/Home/Statement-How";
import ContactStatement from "../features/Home/Statement-Contact";

function Homepage() {
  return (
    <>
      <IntroHeader />
      <CommitmentHeader />
      <SimpleSlider />
      <HowStatement />
      <ContactStatement />
    </>
  );
}

export default Homepage;
