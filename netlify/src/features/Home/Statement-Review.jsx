import Box from "../../ui/Box";
import Card from "../../ui/Card";
import Header from "../../ui/Header";
import Text from "../../ui/Text";

function ReviewStatement() {
  return (
    <Box margin="30px 0px">
      <Header
        as="h1"
        color="var(--color-tan-100)"
        textcase="upper"
        shadow="0 0 3px #333333"
        fontWeight="700"
        font="domine"
      >
        Community Feedback
      </Header>
      <Card
        colorGradient="linear-gradient(to bottom left, var(--color-accent), #042947)"
        gap="10px"
        borderradius="5px"
        margin="5px 10px"
        padding="30px"
      >
        <Text color="var(--color-tan-100)" fontstyle="italic" align="center">
          "What sets Craig apart is his willingness to dive into the details to
          make each project the best it can be."
        </Text>
        <Text color="var(--color-tan-100)" fontWeight="600" align="center">
          Tom Tkachuk
        </Text>
        <Text color="var(--color-tan-100)" align="center">
          CEO & Property Manager Blue Valley Dermatology & BVD Properties
        </Text>
      </Card>
    </Box>
  );
}

export default ReviewStatement;
