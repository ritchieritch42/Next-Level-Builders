import Card from "../../ui/Card";
import Box from "../../ui/Box";
import Logo from "../../ui/Logo";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import {
  FaBuilding,
  FaDraftingCompass,
  FaHardHat,
  FaUserEdit,
} from "react-icons/fa";
import { AiOutlineRedo } from "react-icons/ai";
import { MdMeetingRoom } from "react-icons/md";
import Line from "../../ui/Line";

const types = [
  {
    type: "Tenant Improvement",
    logo1: <FaUserEdit />,
    logo2: <MdMeetingRoom />,
    description: "Customizing interior leased spaces to suit tenant needs.",
    line: true,
  },
  {
    type: "Full Building Renovation",
    logo1: <FaBuilding />,
    logo2: <AiOutlineRedo />,
    description: "Overhauling an entire existing structure to improve value.",
    line: true,
  },
  {
    type: "Ground Up Construction",
    logo1: <FaHardHat />,
    logo2: <FaDraftingCompass />,
    description: "Building new structures from an empty site.",
  },
];

console.log(types);

function TypeStatement() {
  return (
    <Box margin="30px 0px">
      <Header as="h1" color="var(--color-tan-100)" textcase="upper">
        What we build
      </Header>
      <Card
        bgcolor="#ffffff"
        colorGradient="linear-gradient(to bottom left, var(--color-secondary), #310f0f)"
        margin="10px 10px 10px 10px"
        padding="30px"
        borderradius="40px 25px 25px 25px"
        gap="10px"
      >
        {types.map((type) => (
          <Box key={type.type}>
            <Header as="h2" color="#ffffff">
              {type.type}
            </Header>
            <Box stack="horizontal">
              <Logo color="#ffffff" width="8vw">
                {type.logo1}
              </Logo>
              <Logo color="#ffffff" width="8vw">
                {type.logo2}
              </Logo>
            </Box>
            <Text color="#ffffff" margin="0px 20px">
              {type.description}
            </Text>
            {type.line && <Line color="#ffffff" />}
          </Box>
        ))}
      </Card>
    </Box>
  );
}

export default TypeStatement;
