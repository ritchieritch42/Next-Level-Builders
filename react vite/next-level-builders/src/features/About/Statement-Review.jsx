import Box from "../../ui/Box";
import Card from "../../ui/Card";
import Text from "../../ui/Text";

function ReviewStatement() {
  return (
    <Card bgcolor="var(--color-blue-300)">
      <Box>
        <Text color="var(--color-tan-100)" fontstyle="italic">
          "What sets Craig apart is his willingness to dive into the details to
          make each project the best it can be."
        </Text>
        <Text color="var(--color-tan-100)" fontWeight="600">
          Tom Tkachuk
        </Text>
        <Text color="var(--color-tan-100)">
          CEO & Property Manager Blue Valley Dermatology & BVD Properties
        </Text>
      </Box>
    </Card>
  );
}

export default ReviewStatement;
