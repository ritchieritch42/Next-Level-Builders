import Box from "../../ui/Box";
import Card from "../../ui/Card";
import Header from "../../ui/Header";
import Text from "../../ui/Text";

function TypeStatement() {
  return (
    <Card bgColor="var(--color-tan-100)">
      <Card bgColor="var(--color-blue-200)">
        <Box placement="center">
          <Header color="var(--color-tan-100)" as="h3" textCase="upper">
            Industrial & Warehousing
          </Header>
          <Header color="var(--color-tan-100)" as="h3" textCase="upper">
            Office Spaces
          </Header>
          <Header color="var(--color-tan-100)" as="h3" textCase="upper">
            Religious Facilities
          </Header>
          <Header color="var(--color-tan-100)" as="h3" textCase="upper">
            Financial Institutions
          </Header>
          <Header color="var(--color-tan-100)" as="h3" textCase="upper">
            Sitework & Improvements
          </Header>
          <Header color="var(--color-tan-100)" as="h3" textCase="upper">
            Commercial Properties
          </Header>
        </Box>
      </Card>
      <Box>
        <Header color="var(--color-blue-400)" as="h3">
          What we do best:
        </Header>
        <Text>
          We take on projects of all sizes, from ground-up builds to renovations
          and tenant improvements.
        </Text>
        <ul>
          <li>Ground-Up Construction</li>
          <li>Renovation & Tenant Finish</li>
          <li>Sitework</li>
          <li>Speciality</li>
        </ul>
      </Box>
    </Card>
  );
}

export default TypeStatement;
