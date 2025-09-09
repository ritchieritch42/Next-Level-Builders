import Card from "../../ui/Card";
import Box from "../../ui/Box";
import Header from "../../ui/Header";
import Text from "../../ui/Text";

function FeaturedProjectHeader() {
  return (
    <Card bgcolor="var(--color-tan-100)">
      <Box>
        <Box>
          <Header color="var(--color-blue-400)" as="h2">
            Featured Project
          </Header>
        </Box>
        <Box>
          <Text>
            Renovation of existing office space, adding 5,000 square feet of
            medical clinic to the Blue Valley Dermatology facility.
          </Text>
          <Text>
            The newly finished area includes Moh's surgery suites, Moh's and
            Pathology Labs, offices, exam rooms and reception areas.
          </Text>
          <Text>
            The work included demolition, carpentry, finishes, casework, fire
            sprinkler, plumbing, HVAC, electrical and fire alarm.
          </Text>
        </Box>
      </Box>
    </Card>
  );
}

export default FeaturedProjectHeader;
