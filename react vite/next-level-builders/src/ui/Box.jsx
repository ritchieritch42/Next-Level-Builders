import styled from "styled-components";

const justifyMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

const StyledBox = styled.div`
  display: flex;
  justify-content: ${({ placement }) => justifyMap[placement] || "flex-start"};
`;

function Box({ children, placement }) {
  return <StyledBox placement={placement}>{children}</StyledBox>;
}

export default Box;
