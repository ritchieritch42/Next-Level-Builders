import Box from "../../ui/Box";
import Card from "../../ui/Card";
import Text from "../../ui/Text";
import Logo from "../../ui/Logo";
import { FaBookOpen } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

const steps = [
  {
    step: "Traditional General Contracting",
    description:
      "We use the plans drawn by your design team to bid and build your project. This approach is preferred by some Owners as they have a direct line of Communication with their design team",
    logo: <FaBookOpen />,
  },
  {
    step: "Negotiated",
    description:
      "We work with your design team to provide the most efficient and cost effective design. This approach allows your design team to work directly with you but allows us to constantly review the drawings to keep buildability and budget in mind",
    logo: <FaRegHandshake />,
  },
  {
    step: "Design Build",
    description:
      "We start with your concept and provide complete design and construction services. Providing both design and construction allows us to customize your building to give you the best structure at the best price in the shortest time frame.",
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
