import styled from "styled-components";

const caseMap = {
  upper: "uppercase",
  lower: "lowercase",
  cap: "capitalize",
};

const alignMap = {
  center: "center",
  left: "left",
  right: "right",
};

const StyledText = styled.p`
  margin: 0px;
  padding: 0px 12px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  text-transform: ${({ textcase }) => caseMap[textcase]};
  font-style: ${(props) => props.fontstyle};
  text-align: ${({ align }) => alignMap[align] || "center"};
`;

function Text({ children, ...rest }) {
  if (children === null || children === undefined) {
    return null;
  }

  // Check mapped components with empty strings so that no blank white space is rendered
  if (typeof children === "string" && children.trim().length === 0) {
    return null;
  }

  return <StyledText {...rest}>{children}</StyledText>;
}

export default Text;
