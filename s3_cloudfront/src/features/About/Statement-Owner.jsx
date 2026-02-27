import Card from "../../ui/Card";
import Box from "../../ui/Box";
import Header from "../../ui/Header";
import Text from "../../ui/Text";

function OwnerStatement() {
  return (
    <Box margin="30px 0px">
      <Header
        padding="0px"
        color="var(--color-neutral-light)"
        as="h1"
        align="center"
        fontWeight="700"
        font="domine"
        textcase="upper"
      >
        Craig Ritchie, Owner, Next Level Builders LLC
      </Header>
      <Card
        gap="10px"
        bgcolor="var(--color-neutral-light)"
        margin="10px 10px 10px 10px"
        padding="30px"
        borderradius="5px"
      >
        <Text color="var(--color-base)" fontWeight="500" fontSize="1.2rem">
          Craig has been in the construction industry for 33 years, spending the
          last 26 in the Kansas City metro area. He has experience in all types
          of construction including ground up and renovation of both small and
          large scale projects.
        </Text>
        <Text color="var(--color-base)" fontWeight="500" fontSize="1.2rem">
          Known for his hands-on approach and attention to detail, Craig
          consistently delivers on time, on budget with quality construction
          that clients trust.
        </Text>
        <Text color="var(--color-base)" fontWeight="500" fontSize="1.2rem">
          When not working, Craig enjoys home renovation projects, time with his
          wife, children and friends and serving at their local church.
        </Text>
      </Card>
    </Box>
  );
}

export default OwnerStatement;
