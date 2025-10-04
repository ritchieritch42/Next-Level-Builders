import Box from "../../ui/Box";
import Card from "../../ui/Card";
import Text from "../../ui/Text";
import Logo from "../../ui/Logo";
import Line from "../../ui/Line";
import { FaBookOpen } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import Header from "../../ui/Header";

const steps = [
  {
    step: "Traditional General Contracting",
    description:
      "We use the plans drawn by your design team to bid and build your project. This approach is preferred by some owners as they have a direct line of communication with their design team.",
    logo: <FaBookOpen />,
  },
  {
    step: "Negotiated",
    description:
      "We work with your design team to provide the most efficient and cost effective design. This approach allows your design team to work directly with you but allows us to constantly review the drawings to keep buildability and budget in mind.",
    logo: <FaRegHandshake />,
  },
  {
    step: "Design Build",
    description:
      "We start with your concept and provide complete design and construction services. Providing both design and construction allows us to customize your building to give you the best structure at the best price in the shortest time frame.",
    logo: (
      <>
        <FaPen key="pen" />
        <FaHammer key="hammer" />
      </>
    ),
    height: "8vw",
    width: "8vw",
  },
];

function HowStatement() {
  return (
    <Box margin="10px 0px 30px 0px" gap="0px">
      <Header as="h1" color="var(--color-tan-100)" textcase="upper">
        How We Build
      </Header>
      <Box>
        {steps.map((step) => (
          <Card
            bgcolor="var(--color-accent)"
            colorGradient="linear-gradient(to bottom right, var(--color-accent), #16162e)"
            margin="10px 10px 10px 10px"
            padding="30px"
            borderradius="40px 25px 25px 25px"
            key={step.step}
          >
            <Box stack="horizontal" wrap="nowrap" placement="evenly">
              <Box placement="start">
                <Text fontWeight="700" textcase="upper" align="left">
                  {step.step}
                </Text>
                <Text align="left">{step.description}</Text>
              </Box>
              <Logo color="#ffffff" width={step.width} height={step.height}>
                {step.logo}
              </Logo>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default HowStatement;
