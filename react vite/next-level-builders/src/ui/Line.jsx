import styled from "styled-components";

const StyledLine = styled.hr`
  width: 100%;
  height: 0.5px;
  color: ${(props) => props.color || "var(--color-red-500)"};
  background-color: ${(props) => props.color || "var(--color-red-500)"};
  margin: 3px;
`;

function Line({ ...rest }) {
  return <StyledLine {...rest} />;
}

export default Line;
