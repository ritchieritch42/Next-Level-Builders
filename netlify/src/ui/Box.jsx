import styled from "styled-components";

const justifyMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  evenly: "space-between",
};

const stackMap = {
  horizontal: "row",
  vertical: "column",
};

const StyledBox = styled.div`
  display: flex;
  flex-wrap: ${({ wrap }) => wrap || "wrap"};
  flex-direction: ${({ stack }) => stackMap[stack] || "column"};
  justify-content: ${({ placement }) => justifyMap[placement] || "center"};
  align-items: ${({ placement }) => justifyMap[placement] || "center"};
  gap: ${(props) => props.gap || "10px"};
  margin: ${(props) => props.margin || "0px"};
  background-image: ${(props) => props.colorGradient || "0px"};
  width: ${(props) => props.width || "100%"};
  z-index: 10;

  @media screen and (min-width: 1250px) {
    flex-direction: ${({ stack }) => stackMap[stack] || "row"};
    flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  }
`;

function Box({ children, ...rest }) {
  return <StyledBox {...rest}>{children}</StyledBox>;
}

export default Box;
