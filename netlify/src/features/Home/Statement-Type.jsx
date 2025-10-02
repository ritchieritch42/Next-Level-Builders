import Card from "../../ui/Card";
import Box from "../../ui/Box";
import Logo from "../../ui/Logo";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import {
  FaBuilding,
  FaDraftingCompass,
  FaHardHat,
  FaIndent,
  FaIndustry,
  FaUserEdit,
} from "react-icons/fa";
import { AiOutlineRedo } from "react-icons/ai";
import { MdMeetingRoom } from "react-icons/md";

function TypeStatement() {
  return (
    <>
      <Header
        as="h1"
        color="var(--color-tan-100)"
        textcase="upper"
        margin="10px 0px"
      >
        What we build
      </Header>
      <Card
        bgcolor="var(--color-secondary)"
        margin="10px 10px 10px 10px"
        padding="30px"
        borderradius="40px 25px 25px 25px"
        gap="10px"
      >
        <Box>
          <Header as="h2" color="var(--color-tan-100)">
            Tenant Improvement
          </Header>
          <Box stack="horizontal">
            <Logo color="#ffffff" width="8vw">
              <FaUserEdit />
            </Logo>
            <Logo color="#ffffff" width="8vw">
              <MdMeetingRoom />
            </Logo>
          </Box>
          <Text color="var(--color-neutral-light)" margin="0px 20px">
            Customizing interior leased spaces to suit tenant needs.
          </Text>
        </Box>
        <Box>
          <Header as="h2" color="var(--color-tan-100)">
            Full Building Renovation
          </Header>
          <Box stack="horizontal">
            <Logo color="#ffffff" width="8vw">
              <FaBuilding />
            </Logo>
            <Logo color="#ffffff" width="8vw">
              <AiOutlineRedo />
            </Logo>
          </Box>
          <Text color="var(--color-neutral-light)" margin="0px 20px">
            Overhauling an entire existing structure to improve value.
          </Text>
        </Box>
        <Box>
          <Header as="h2" color="var(--color-tan-100)">
            Ground Up Construction
          </Header>
          <Box stack="horizontal">
            <Logo color="#ffffff" width="8vw">
              <FaHardHat />
            </Logo>
            <Logo color="#ffffff" width="8vw">
              <FaDraftingCompass />
            </Logo>
          </Box>
          <Text color="var(--color-neutral-light)" margin="0px 20px">
            Building new structures from an empty site
          </Text>
        </Box>
      </Card>
    </>
  );
}

export default TypeStatement;
