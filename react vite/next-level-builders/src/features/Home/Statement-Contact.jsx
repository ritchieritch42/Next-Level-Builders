import Box from "../../ui/Box";
import Header from "../../ui/Header";
import Card from "../../ui/Card";
import Text from "../../ui/Text";
import { FaFacebook } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";

function ContactStatement() {
  return (
    <Card bgColor="var(--color-tan-300)">
      <Box>
        <Header color="var(--color-blue-400)" as="h3">
          Ready to build the future of your business
        </Header>
        <Text>
          Let's talk about how Next Level Builders can help you bring your
          vision to life.
        </Text>
      </Box>
      <Box placement="center">
        <Header color="var(--color-red-500)" as="h3">
          Contact Craig Ritchie
        </Header>
        <Box stack="horizontal" placement="center" gap="60px">
          <FaFacebook size={50} style={{ fill: "var(--color-socials-fb)" }} />
          <BiLogoLinkedinSquare
            size={60}
            style={{ fill: "var(--color-socials-li)" }}
          />
        </Box>
      </Box>
    </Card>
  );
}

export default ContactStatement;
