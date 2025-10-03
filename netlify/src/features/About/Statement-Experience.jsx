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
        colorGradient="linear-gradient(to bottom left, var(--color-secondary), #310f0f)"
        margin="10px 10px 10px 10px"
        padding="30px"
        borderradius="40px 25px 25px 25px"
        gap="10px"
      >
        <Box gap="5px" margin="0">
          <Header as="h2" color="#ffffff">
            Blue Valley Dermatology
          </Header>
          <span style={{ color: "#ffffff" }}>Lenexa, KS</span>
          <span style={{ color: "#ffffff" }}>3,500 SF Tenant Remodel</span>
        </Box>
        <Box gap="5px">
          <Header as="h2" color="#ffffff">
            Blue Valley Dermatology Phase 2
          </Header>
          <span style={{ color: "#ffffff" }}>Overland Park</span>
          <span style={{ color: "#ffffff" }}>5,000 SF Tenant Remodel</span>
        </Box>
        <Line color="#ffffff" />
        <Text color="#ffffff" fontstyle="italic" align="center">
          "What sets Craig apart is his willingness to dive into the details to
          make each project the best it can be."
        </Text>
        <Header color="#ffffff" as="h2">
          Tom Tkachuk
        </Header>
        <Text color="#ffffff" align="center">
          CEO & Property Manager Blue Valley Dermatology & BVD Properties
        </Text>
      </Card>
    </Box>
  );
}

export default ExperienceStatement;
