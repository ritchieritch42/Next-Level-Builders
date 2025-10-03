import Card from "../../ui/Card";
import Header from "../../ui/Header";
import Box from "../../ui/Box";
import Text from "../../ui/Text";
import Image from "../../ui/Image";
import Line from "../../ui/Line";

function ExperienceStatement() {
  return (
    <Box margin="30px 0px">
      <Header as="h1" color="var(--color-neutral-light)" align="center">
        Next Level Builders Experience
      </Header>
      <Card
        bgcolor="var(--color-neutral-light)"
        margin="10px 10px 10px 10px"
        padding="30px"
        borderradius="40px 25px 25px 25px"
        gap="10px"
      >
        <Box gap="5px" margin="0">
          <Header as="h2" color="#000000">
            Blue Valley Dermatology
          </Header>
          <span>Lenexa, KS</span>
          <span>3,500 SF Tenant Remodel</span>
        </Box>
        <Box gap="5px">
          <Header as="h2" color="#000000">
            Blue Valley Dermatology Phase 2
          </Header>
          <span>Overland Park</span>
          <span>5,000 SF Tenant Remodel</span>
        </Box>
        <Line />
        <Text color="#000000" fontstyle="italic" align="center">
          "What sets Craig apart is his willingness to dive into the details to
          make each project the best it can be."
        </Text>
        <Header color="#000000" as="h2">
          Tom Tkachuk
        </Header>
        <Text color="#000000" align="center">
          CEO & Property Manager Blue Valley Dermatology & BVD Properties
        </Text>
      </Card>
    </Box>
  );
}

export default ExperienceStatement;
