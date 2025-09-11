import Box from "../../ui/Box";
import Card from "../../ui/Card";
import Text from "../../ui/Text";
import Logo from "../../ui/Logo";
import { FaPersonShelter } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

const steps = [
  {
    step: "General Contracting",
    description:
      "Already have an architect’s design? We bring it to life with expert building and dependable results.",
    logo: <FaPersonShelter />,
  },
  {
    step: "Negotiated",
    description:
      "Want a more collaborative process? We work with you early to plan, budget, and build smoothly.",
    logo: <FaRegHandshake />,
  },
  {
    step: "Design-Build",
    description:
      "Prefer one team from start to finish? We handle both design and construction for a faster, simpler project.",
    logo: (
      <>
        <FaPen />
        <FaHammer />
      </>
    ),
  },
];

function HowStatement() {
  return (
    <Box margin="10px 0px 0px 0px">
      {steps.map((step) => (
        <Card
          bgcolor="var(--color-accent)"
          margin="20px 10px 20px 10px"
          padding="40px"
          borderradius="40px 25px 25px 25px"
        >
          <Box key={step.step}>
            <Box stack="horizontal" wrap="nowrap" placement="evenly">
              <Box>
                <Text fontWeight="700" textcase="upper" align="left">
                  {step.step}
                </Text>
                <Text align="left">{step.description}</Text>
              </Box>
              <Logo color="#ffffff">{step.logo}</Logo>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default HowStatement;
