import Card from "../../ui/Card";
import Header from "../../ui/Header";
import Box from "../../ui/Box";
import Text from "../../ui/Text";
import Image from "../../ui/Image";

function ExperienceStatement() {
  return (
    <Card bgcolor="var(--color-tan-100)">
      <Box>
        <Box gap="5px">
          <Header as="h2" color="var(--color-blue-400)" align="center">
            Next Level Builders Experience
          </Header>
          {/* <Image
            alt="Blue Valley Dermatology Logo"
            src="/blue_valley_dermatology_logo.png"
          /> */}
        </Box>
        <Box gap="5px">
          <Text fontWeight="700" color="var(--color-grey-500)">
            Blue Valley Dermatology
          </Text>
          <span>Lenexa, KS</span>
          <span>3,500 SF Tenant Remodel</span>
        </Box>
        <Box gap="5px">
          <Text fontWeight="700" color="var(--color-grey-500)">
            Blue Valley Dermatology Phase 2
          </Text>
          <span>Overland Park</span>
          <span>5,000 SF Tenant Remodel</span>
        </Box>
      </Box>
    </Card>
  );
}

export default ExperienceStatement;
