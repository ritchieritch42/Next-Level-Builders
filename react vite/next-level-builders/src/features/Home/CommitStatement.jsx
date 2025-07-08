import Box from "../../ui/Box";
import Header from "../../ui/Header";
import Card from "../../ui/Card";

function CommitmentHeader() {
  return (
    <Card bgColor="var(--color-tan-100)">
      <Box>
        <Header color="var(--color-blue-400)" as="h3">
          We are committed to delivering quality construction on time and within
          budget.
        </Header>
        <p>
          At Next Level Builders, we focus on delivering high-quality projects
          with precision and care. Our clients trust us to handle every detail,
          ensuring projects are completed on time, within budget, and to the
          highest standards. With over 30 years of industry expertise, we build
          long-term relationships through reliability, problem-solving, and a
          hands-on approach that sets us apart.
        </p>
        <Header color="var(--color-blue-400)" as="h3">
          Who we work with:
        </Header>
        <p>
          From industrial facilities to office spaces and beyond, we build for
          businesses that demand quality and reliability.
        </p>
      </Box>
      <Card bgColor="var(--color-blue-200)">
        <Box placement="center">
          <Header color="var(--color-tan-100)" as="h3" textCase="upper">
            Industrial & Warehousing
          </Header>
          <Header color="var(--color-tan-100)" as="h3" textCase="upper">
            Office Spaces
          </Header>
          <Header color="var(--color-tan-100)" as="h3" textCase="upper">
            Religious Facilities
          </Header>
          <Header color="var(--color-tan-100)" as="h3" textCase="upper">
            Financial Institutions
          </Header>
          <Header color="var(--color-tan-100)" as="h3" textCase="upper">
            Sitework & Improvements
          </Header>
          <Header color="var(--color-tan-100)" as="h3" textCase="upper">
            Commercial Properties
          </Header>
        </Box>
      </Card>
    </Card>
  );
}

export default CommitmentHeader;
