import Card from "../../ui/Card";
import Header from "../../ui/Header";
import Box from "../../ui/Box";
import Text from "../../ui/Text";

function ExperienceStatement() {
  return (
    <Card bgcolor="var(--color-tan-100)">
      <Box placement="center">
        <Header as="h2" color="var(--color-blue-400)">
          Next Level Builders Experience
        </Header>
        <img
          alt="Blue Valley Dermatology Logo"
          src="/blue_valley_dermatology_logo.jpg"
        />
        <Text>Blue Valley Dermatology</Text>
        <Text>Blue Valley Dermatology Phase 2</Text>
      </Box>
    </Card>
  );
}

export default ExperienceStatement;
