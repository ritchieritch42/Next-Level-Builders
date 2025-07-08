import CommitmentHeader from "../features/Home/Statement-Commit";
import IntroHeader from "../features/Home/Header-Intro";
import TypeStatement from "../features/Home/Statement-Type";
import HowStatement from "../features/Home/Statement-How";

function Homepage() {
  return (
    <>
      <IntroHeader />
      <CommitmentHeader />
      <TypeStatement />
      <HowStatement />
    </>
  );
}

export default Homepage;
