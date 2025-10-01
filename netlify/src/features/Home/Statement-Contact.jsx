import Box from "../../ui/Box";
import Header from "../../ui/Header";
import Card from "../../ui/Card";
import Text from "../../ui/Text";
import { FaFacebook } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";

function ContactStatement() {
  return (
    <>
      <Card gap="20px" id="contact">
        <Box gap="20px">
          <Header color="var(--color-tan-100)" as="h3" align="center">
            Ready to build the future of your business?
          </Header>
          <Text align="center">
            Let's talk about how Next Level Builders can help you bring your
            vision to life.
          </Text>
        </Box>
        <Box stack="horizontal" gap="60px">
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
      </Card>
    </>
  );
}

export default ContactStatement;
