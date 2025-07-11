import Card from "../../ui/Card";
import Box from "../../ui/Box";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import Line from "../../ui/Line";

function JobsStatement() {
  return (
    <Card bgcolor="var(--color-tan-100)">
      <Box>
        <Header color="var(--color-blue-400)" as="h2">
          Craig Ritchie Experience
        </Header>
      </Box>
      <Box>
        <Text color="var(--color-red-500)" textcase="upper" as="h3">
          Tenant Finish
        </Text>
        <Line />
        <Text fontWeight="700" color="var(--color-grey-500)">
          Blue Valley Dermatology, Phase 1
        </Text>
        <Text color="var(--color-grey-500)">Overland Park</Text>
        <Text color="var(--color-grey-500)">
          Kansas 5,000 SF Tenant Remodel
        </Text>
        <Text fontWeight="700" color="var(--color-grey-500)">
          Boise Cascade
        </Text>
        <Text color="var(--color-grey-500)">Kansas City, Missouri</Text>
        <Text color="var(--color-grey-500)">
          Interior Upgrades for New Door Manufacturing Shop
        </Text>
        <Text fontWeight="700" color="var(--color-grey-500)">
          Owens & Minor
        </Text>
        <Text color="var(--color-grey-500)">Kansas City, Missouri</Text>
        <Text color="var(--color-grey-500)">
          Tenant Finish in Spec Warehouse
        </Text>
        <Text fontWeight="700" color="var(--color-grey-500)">
          TricorBraun
        </Text>
        <Text color="var(--color-grey-500)">Kansas City, Missouri</Text>
        <Text color="var(--color-grey-500)">
          Tenant Finish in Spec Warehouse
        </Text>
        <Text fontWeight="700" color="var(--color-grey-500)">
          Char Bar
        </Text>
        <Text color="var(--color-grey-500)">Kansas City, Missouri</Text>
        <Text color="var(--color-grey-500)">
          New Restaurant in Existing Space
        </Text>
        <Text fontWeight="700" color="var(--color-grey-500)">
          Marketplace Shopping Center
        </Text>
        <Text color="var(--color-grey-500)">Independence, Missouri</Text>
        <Text color="var(--color-grey-500)">Various Tenant Renovations</Text>
        <Text fontWeight="700" color="var(--color-grey-500)">
          Integrity Gymnastics
        </Text>
        <Text color="var(--color-grey-500)">Overland Park, Kansas</Text>
        <Text color="var(--color-grey-500)">
          Renovation for a New Gymnasium
        </Text>
        <Text fontWeight="700" color="var(--color-grey-500)">
          ExamOne
        </Text>
        <Text color="var(--color-grey-500)">Lee's Summit, Missouri</Text>
        <Text color="var(--color-grey-500)">
          Renovations to Summit Tech Call Center
        </Text>
      </Box>
    </Card>
  );
}

export default JobsStatement;
