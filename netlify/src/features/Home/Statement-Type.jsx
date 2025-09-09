import Box from "../../ui/Box";
import Card from "../../ui/Card";
import Header from "../../ui/Header";
import Text from "../../ui/Text";

const typesOfWork = [
  "Industrial & Warehousing",
  "Office Spaces",
  "Religious Facilities",
  "Financial Institutions",
  "Sitework & Improvements",
  "Commercial Properties",
];

function TypeStatement() {
  return (
    <Card bgcolor="var(--color-tan-100)" gap="10px">
      <Card bgcolor="var(--color-blue-200)">
        <Box placement="center" gap="5px">
          {typesOfWork.map((type) => (
            <Header
              color="var(--color-tan-100)"
              as="h3"
              textcase="upper"
              align="center"
              key={type}
            >
              {type}
            </Header>
          ))}
        </Box>
      </Card>
      <Box placement="center" gap="5px">
        <Box>
          <Header color="var(--color-blue-400)" as="h3">
            What we do best
          </Header>
          <Text align="center">
            We take on projects of all sizes, from ground-up builds to
            renovations and tenant improvements.
          </Text>
        </Box>
        <Box placement="start">
          <ul>
            <li>Ground-Up Construction</li>
            <li>Renovation & Tenant Finish</li>
            <li>Sitework</li>
            <li>Speciality</li>
          </ul>
        </Box>
      </Box>
    </Card>
  );
}

export default TypeStatement;
