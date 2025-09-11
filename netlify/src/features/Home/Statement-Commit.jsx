import Box from "../../ui/Box";
import Header from "../../ui/Header";
import Card from "../../ui/Card";
import Text from "../../ui/Text";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { HiClock } from "react-icons/hi2";
import { HiCurrencyDollar } from "react-icons/hi2";
import Logo from "../../ui/Logo";

function CommitmentHeader() {
  return (
    <Box>
      <Header color="var(--color-tan-100)" as="h3">
        We are committed to delivering quality construction on time and within
        budget.
      </Header>
      <Box stack="horizontal" gap="20vw">
        <Logo color="var(--color-red-400)">
          <HiClipboardDocumentCheck />
        </Logo>
        <Logo color="var(--color-red-400)">
          <HiClock />
        </Logo>
        <Logo color="var(--color-red-400)">
          <HiCurrencyDollar />
        </Logo>
      </Box>
    </Box>
  );
}

export default CommitmentHeader;
