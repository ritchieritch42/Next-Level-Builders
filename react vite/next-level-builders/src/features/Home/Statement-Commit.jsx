import Box from "../../ui/Box";
import Header from "../../ui/Header";
import Card from "../../ui/Card";
import Text from "../../ui/Text";

function CommitmentHeader() {
  return (
    <Card bgcolor="var(--color-tan-100)">
      <Box placement="start">
        <Header color="var(--color-blue-400)" as="h3">
          We are committed to delivering quality construction on time and within
          budget.
        </Header>
        <Text>
          At Next Level Builders, we focus on delivering high-quality projects
          with precision and care. Our clients trust us to handle every detail,
          ensuring projects are completed on time, within budget, and to the
          highest standards. With over 30 years of industry expertise, we build
          long-term relationships through reliability, problem-solving, and a
          hands-on approach that sets us apart.
        </Text>
        <Header color="var(--color-blue-400)" as="h3">
          Who do we work with?
        </Header>
        <Text>
          From industrial facilities to office spaces and beyond, we build for
          businesses that demand quality and reliability.
        </Text>
      </Box>
    </Card>
  );
}

export default CommitmentHeader;
