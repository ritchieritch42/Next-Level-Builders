import OwnerStatement from "../features/About/Statement-Owner";
import ExperienceStatement from "../features/About/Statement-Experience";
import ReviewStatement from "../features/About/Statement-Review";
import JobsStatement from "../features/About/Statement-Jobs";

function About() {
  return (
    <>
      <OwnerStatement />
      <ExperienceStatement>
        <ReviewStatement />
      </ExperienceStatement>
    </>
  );
}

export default About;
