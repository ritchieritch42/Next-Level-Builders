import Box from "../../ui/Box";
import Card from "../../ui/Card";
import Text from "../../ui/Text";
import Logo from "../../ui/Logo";
import { FaBookOpen } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import Header from "../../ui/Header";

const steps = [
  {
    step: "Traditional General Contracting",
    description:
      "We use the plans drawn by your design team to build your project.",
    logo: <FaBookOpen />,
  },
  {
    step: "Design Build",
    description:
      "We provide complete design and construction services for your project.",
    logo: (
      <>
        <FaPen key="pen" />
        <FaHammer key="hammer" />
      </>
    ),
    height: "8vw",
    width: "8vw",
  },
  {
    step: "Negotiated",
    description:
      "We work with your design team to provide the most efficient an cost effective design and construction services.",
    logo: <FaRegHandshake />,
  },
];

function HowStatement() {
  return (
    <Box margin="10px 0px 30px 0px" gap="0px">
      <Header
        as="h1"
        color="var(--color-tan-100)"
        textcase="upper"
        shadow="0 0 3px #333333"
        fontWeight="700"
        font="domine"
      >
        How We Build
      </Header>
      <Box margin="10px 0px 0px 0px">
        {steps.map((step) => (
          <Card
            bgcolor="var(--color-neutral-light)"
            // colorGradient="linear-gradient(to bottom right, var(--color-neutral-light), #16162e)"
            margin="10px 10px 10px 10px"
            padding="30px"
            borderradius="5px"
            key={step.step}
          >
            <Box stack="horizontal" wrap="nowrap" placement="evenly">
              <Box placement="start">
                <Text
                  fontWeight="700"
                  textcase="upper"
                  align="left"
                  color="var(--color-base)"
                >
                  {step.step}
                </Text>
                <Text align="left" color="var(--color-base)">
                  {step.description}
                </Text>
              </Box>
              <Logo
                color="var(--color-base)"
                width={step.width}
                height={step.height}
              >
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
