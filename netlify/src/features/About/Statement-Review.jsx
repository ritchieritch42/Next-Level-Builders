import Box from "../../ui/Box";
import Card from "../../ui/Card";
import Text from "../../ui/Text";

function ReviewStatement() {
  return (
    <Box margin="30px 0px">
      <Card
        bgcolor="var(--color-blue-300)"
        gap="10px"
        borderradius="200px"
        margin="10px 10px 10px 10px"
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
