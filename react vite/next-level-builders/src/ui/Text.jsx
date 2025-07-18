import styled from "styled-components";

const caseMap = {
  upper: "uppercase",
  lower: "lowercase",
  cap: "capitalize",
};

const StyledText = styled.p`
  margin: 0px;
  padding: 5px 0px 0px 0px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  text-transform: ${({ textcase }) => caseMap[textcase]};
  font-style: ${(props) => props.fontstyle};
`;

function Text({ children, ...rest }) {
  return <StyledText {...rest}>{children}</StyledText>;
}

export default Text;
