import styled from "styled-components";

const justifyMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  evenly: "space-evenly",
};

const stackMap = {
  horizontal: "row",
  vertical: "column",
};

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ stack }) => stackMap[stack] || "column"};
  justify-content: ${({ placement }) => justifyMap[placement] || "flex-start"};
  align-items: ${({ placement }) => justifyMap[placement] || "flex-start"};
  gap: ${(props) => props.gap};
  padding: 5px;
`;

function Box({ children, ...rest }) {
  return <StyledBox {...rest}>{children}</StyledBox>;
}

export default Box;
