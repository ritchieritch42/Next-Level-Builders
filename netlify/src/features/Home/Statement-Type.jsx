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
    description: "Customizing existing spaces to meet tenant needs",
    line: true,
  },
  {
    type: "Full Building Renovation",
    logo1: <FaBuilding />,
    logo2: <AiOutlineRedo />,
    description: "Modernizing an entire existing structure to improve value",
    line: true,
  },
  {
    type: "Ground Up Construction",
    logo1: <FaHardHat />,
    logo2: <FaDraftingCompass />,
    description: "Building new structures on an existing or new site",
  },
];

function TypeStatement() {
  return (
    <Box margin="15px 0px">
      <Header
        as="h1"
        color="var(--color-tan-100)"
        textcase="upper"
        shadow="0 0 3px #333333"
        fontWeight="700"
        font="domine"
      >
        What we build
      </Header>
      <Card
        bgcolor="#ffffff"
        colorGradient="linear-gradient(to bottom left, var(--color-accent), #042947)"
        margin="5px 10px"
        padding="30px"
        borderradius="5px"
        gap="10px"
        maxWidth="1250px"
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
