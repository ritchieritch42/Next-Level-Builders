import CommitmentHeader from "../features/Home/Statement-Commit";
import TypeStatement from "../features/Home/Statement-Type";
import HowStatement from "../features/Home/Statement-How";
import ContactStatement from "../features/Home/Statement-Contact";
import PhotoReel from "../features/Home/PhotoReel";
import ReviewStatement from "../features/Home/Statement-Review";

function Homepage() {
  return (
    <>
      <CommitmentHeader />
      <TypeStatement />
      <PhotoReel />
      <HowStatement />
      <ReviewStatement />
      <ContactStatement />
    </>
  );
}

export default Homepage;
