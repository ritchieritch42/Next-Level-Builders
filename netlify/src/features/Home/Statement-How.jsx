import Box from "../../ui/Box";
import Card from "../../ui/Card";
import Header from "../../ui/Header";
import Text from "../../ui/Text";

const steps = [
  {
    step: "General Contracting",
    description:
      "Already have an architect’s design? We bring it to life with expert building and dependable results.",
  },
  {
    step: "Negotiated",
    description:
      "Want a more collaborative process? We work with you early to plan, budget, and build smoothly.",
  },
  {
    step: "Design-Build",
    description:
      "Prefer one team from start to finish? We handle both design and construction for a faster, simpler project.",
  },
];

function HowStatement() {
  return (
    <Box margin="10px 0px 0px 0px">
      <Box gap="10px">
        <Header color="#ffffff" as="h3" align="center">
          How we get it done
        </Header>
        <Text align="center">
          Our approach ensures smooth, efficient projects with no
          surprises&mdash;just results.
        </Text>
      </Box>
      {steps.map((step) => (
        <Card
          bgcolor="var(--color-accent)"
          margin="20px 10px 20px 10px"
          padding="40px"
          borderradius="25px"
        >
          <Box key={step.step}>
            <Text fontWeight="700" textcase="upper" align="left">
              {step.step}
            </Text>
            <Text align="left">{step.description}</Text>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default HowStatement;
