import Header from "../../ui/Header";
import Box from "../../ui/Box";
import Card from "../../ui/Card";

function IntroHeader() {
  return (
    <Card>
      <Box placement="center">
        <Header color="var(--color-tan-100)" as="h1">
          Experience.
        </Header>
        <Header color="var(--color-tan-100)" as="h1">
          Dependability.
        </Header>
        <Header color="var(--color-tan-100)" as="h1">
          Results.
        </Header>
      </Box>
    </Card>
  );
}

export default IntroHeader;
