import styled from "styled-components";

const StyledLine = styled.p`
  width: ${(props) => props.width || "100%"};
  height: 0.5px;
  border-bottom: solid;
  border-color: ${(props) => props.color || "var(--color-red-500)"};
  border-width: 2px;
  margin: 3px;
`;

function Line({ ...rest }) {
  return <StyledLine {...rest} />;
}

export default Line;
