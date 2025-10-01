import Card from "../../ui/Card";
import Box from "../../ui/Box";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import Image from "../../ui/Image";

function OwnerStatement() {
  return (
    <Card bgcolor="var(--color-base)">
      <Box>
        <Box>
          <Card bgcolor="var(--color-accent)">
            <Header
              padding="0px"
              color="var(--color-neutral-light)"
              as="h3"
              align="right"
            >
              Craig Ritchie, Owner, Next Level Builders LLC
            </Header>
          </Card>
          {/* <Box>
            <Image
              alt="Craig Ritchie Profile Picture"
              src="/profilepicture.png"
              borderradius="20px 10px 10px 10px"
              width="100px"
            />
          </Box> */}
        </Box>
        <Box stack="horizontal" wrap="nowrap" gap="5px">
          <Box placement="start">
            <Text>
              Backed by a Bachelor of Science in Construction and 33 years of
              industry experience, Craig Ritchie has served the Kansas City
              Metro for 26 years.
            </Text>
          </Box>
        </Box>
        <Box>
          <Text>
            He specializes in educational, healthcare, industrial, multi-family,
            and tenant improvement projects.{" "}
          </Text>
          <Text>
            Known for his hands-on approach and attention to detail, Craig
            consistently delivers on-time, on-budget results that clients trust.
          </Text>
        </Box>
      </Box>
    </Card>
  );
}

export default OwnerStatement;
