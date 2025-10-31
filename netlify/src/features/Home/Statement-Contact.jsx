import Box from "../../ui/Box";
import Header from "../../ui/Header";
import Card from "../../ui/Card";
import Text from "../../ui/Text";
import { FaFacebook } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";

function ContactStatement() {
  return (
    <>
      <Box gap="20px" id="contact" margin="35px 0px 20px 0px">
        <Header
          color="var(--color-tan-100)"
          as="h2"
          align="center"
          shadow="0 0 3px #333333"
          fontWeight="700"
          font="domine"
          textcase="upper"
        >
          Ready to build the future of your business?
        </Header>
        <Text color="var(--color-tan-100)" align="center" fontSize="1.25rem">
          Let's talk about how Next Level Builders can help you bring your
          vision to life.
        </Text>
      </Box>
      <Box stack="horizontal" gap="60px" margin="20px 0px">
        <a
          href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.facebook.com/61572441690192&ved=2ahUKEwjT7IiH5vOPAxWEnWoFHRUlBKwQFnoECBQQAQ&usg=AOvVaw2vkGKA9EgIa18am3LIp0EL"
          target="_blank"
        >
          <FaFacebook size={50} style={{ fill: "var(--color-tan-100)" }} />
        </a>
        <a
          href="https://www.linkedin.com/company/next-level-bldrs-llc/"
          target="_blank"
        >
          <BiLogoLinkedinSquare
            size={60}
            style={{ fill: "var(--color-tan-100)" }}
          />
        </a>
      </Box>
    </>
  );
}

export default ContactStatement;
