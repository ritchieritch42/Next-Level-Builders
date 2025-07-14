import Card from "../../ui/Card";
import Box from "../../ui/Box";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import Image from "../../ui/Image";

function OwnerStatement() {
  return (
    <Card bgcolor="var(--color-tan-100)">
      <Box placement="center" stack="horizontal" gap="10px">
        <Image
          alt="Craig Ritchie Profile Picture"
          src="/profilepicture.png"
          borderradius="25px"
        />
        <Header color="var(--color-blue-400)" as="h3">
          Craig Ritchie, Owner, Next Level Builders LLC
        </Header>
      </Box>
      <Box>
        <Text>
          Backed by a Bachelor of Science in Construction and 33 years of
          industry experience, Craig Ritchie has served the Kansas City Metro
          for 26 years.
        </Text>
        <Text>
          He specializes in educational, healthcare, industrial, multi-family,
          and tenant improvement projects.{" "}
        </Text>
        <Text>
          Known for his hands-on approach and attention to detail, Craig
          consistently delivers on-time, on-budget results that clients trust.
        </Text>
      </Box>
    </Card>
  );
}

export default OwnerStatement;
