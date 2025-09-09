import Box from "../../ui/Box";
import Card from "../../ui/Card";
import Header from "../../ui/Header";
import Text from "../../ui/Text";

function HowStatement() {
  return (
    <Card bgcolor="var(--color-tan-100)">
      <Box gap="10px">
        <Header color="var(--color-blue-400)" as="h3" align="center">
          How we get it done
        </Header>
        <Text align="center">
          Our approach ensures smooth, efficient projects with no
          surprises&mdash;just results.
        </Text>
      </Box>
      <ul>
        <Box>
          <li>
            <Text
              color="var(--color-blue-400)"
              fontWeight="700"
              textcase="upper"
              align="left"
            >
              General Contracting:
            </Text>
            <Text align="left">
              Reliable project execution from start to finish
            </Text>
          </li>
          <li>
            <Text
              color="var(--color-blue-400)"
              fontWeight="700"
              textcase="upper"
              align="left"
            >
              Negotiated:
            </Text>
            <Text align="left">
              Collaborative solutions tailored to your goals
            </Text>
          </li>
          <li>
            <Text
              color="var(--color-blue-400)"
              fontWeight="700"
              textcase="upper"
              align="left"
            >
              Design-Build
            </Text>
            <Text align="left">
              Efficiency and flexibility with a streamlined process
            </Text>
          </li>
        </Box>
      </ul>
    </Card>
  );
}

export default HowStatement;
