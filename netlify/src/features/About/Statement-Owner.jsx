import Card from "../../ui/Card";
import Box from "../../ui/Box";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import Image from "../../ui/Image";

function OwnerStatement() {
  return (
    <Box margin="30px 0px">
      <Header
        padding="0px"
        color="var(--color-neutral-light)"
        as="h1"
        align="right"
      >
        Craig Ritchie, Owner, Next Level Builders LLC
      </Header>
      <Card
        gap="10px"
        bgcolor="var(--color-accent)"
        colorGradient="linear-gradient(to bottom right, var(--color-accent), #16162e)"
        margin="10px 10px 10px 10px"
        padding="30px"
        borderradius="40px 25px 25px 25px"
      >
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
      </Card>
    </Box>
  );
}

export default OwnerStatement;
