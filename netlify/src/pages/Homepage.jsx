import CommitmentHeader from "../features/Home/Statement-Commit";
import TypeStatement from "../features/Home/Statement-Type";
import HowStatement from "../features/Home/Statement-How";
import ContactStatement from "../features/Home/Statement-Contact";
import PhotoReel from "../features/Home/PhotoReel";
import ReviewStatement from "../features/Home/Statement-Review";
import Box from "../ui/Box";

function Homepage() {
  return (
    <>
      <CommitmentHeader />
      <TypeStatement />
      <HowStatement />
      <PhotoReel />
      <ReviewStatement />
      <ContactStatement />
    </>
  );
}

export default Homepage;
