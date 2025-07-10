import Box from "../../ui/Box";
import Card from "../../ui/Card";
import Header from "../../ui/Header";
import Text from "../../ui/Text";

function HowStatement() {
  return (
    <Card bgColor="var(--color-tan-100)">
      <Header color="var(--color-blue-400)" as="h3">
        How we get it done:
      </Header>
      <Text>
        Our approach ensures smooth, efficient projects with no
        surprises&mdash;just results.
      </Text>
      <ul>
        <li>
          <Text color="var(--color-blue-400)" fontWeight="700" textCase="upper">
            General Contracting:
          </Text>
          <Text>Reliable project execution from start to finish</Text>
        </li>
        <li>
          <Text color="var(--color-blue-400)" fontWeight="700" textCase="upper">
            Negotiated:
          </Text>
          <Text>Collaborative solutions tailored to your goals</Text>
        </li>
        <li>
          <Text color="var(--color-blue-400)" fontWeight="700" textCase="upper">
            Design-Build
          </Text>
          <Text>Efficiency and flexibility with a streamlined process</Text>
        </li>
      </ul>
    </Card>
  );
}

export default HowStatement;
