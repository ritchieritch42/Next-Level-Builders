import styled from "styled-components";

const StyledLine = styled.hr`
  width: 100%;
  color: ${(props) => props.color || "var(--color-red-500)"};
`;

function Line() {
  return <StyledLine />;
}

export default Line;
