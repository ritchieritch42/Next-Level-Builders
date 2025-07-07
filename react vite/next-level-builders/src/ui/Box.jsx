import styled from "styled-components";

const justifyMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

const StyledBox = styled.div`
  display: flex;
  justify-content: ${({ placement }) => justifyMap[placement] || "flex-start"};
  padding: ${(props) => props.padding};
`;

function Box({ children, ...rest }) {
  return <StyledBox {...rest}>{children}</StyledBox>;
}

export default Box;
