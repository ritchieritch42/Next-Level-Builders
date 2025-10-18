import Card from "../../ui/Card";
import Header from "../../ui/Header";
import Box from "../../ui/Box";
import Text from "../../ui/Text";
import Image from "../../ui/Image";
import Line from "../../ui/Line";

function ExperienceStatement() {
  return (
    <Box margin="30px 0px">
      <Header
        as="h1"
        color="var(--color-neutral-light)"
        align="center"
        fontWeight="700"
        font="domine"
      >
        Next Level Builders Experience
      </Header>
      <Card
        bgcolor="var(--color-neutral-light)"
        colorGradient="linear-gradient(to bottom left, var(--color-accent), #042947)"
        margin="10px 10px 10px 10px"
        padding="30px"
        borderradius="5px"
        gap="10px"
      >
        <Box gap="5px" margin="0">
          <Header as="h2" color="#ffffff">
            Blue Valley Dermatology
          </Header>
          <span style={{ color: "#ffffff" }}>Lenexa, KS</span>
          <span style={{ color: "#ffffff" }}>3,500 SF Tenant Remodel</span>
        </Box>
        <Line color="#ffffff" />
        <Box gap="5px">
          <Header as="h2" color="#ffffff">
            Blue Valley Dermatology Phase 2
          </Header>
          <span style={{ color: "#ffffff" }}>Overland Park</span>
          <span style={{ color: "#ffffff" }}>5,000 SF Tenant Remodel</span>
        </Box>
      </Card>
    </Box>
  );
}

export default ExperienceStatement;
