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
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.margin || "0px 12px"};
  color: ${(props) => props.color || "var(--color-tan-100)"};
  background-color: ${(props) => props.bgColor};
  background-image: ${(props) => props.colorGradient};
  font-weight: ${(props) => props.fontWeight};
  text-transform: ${({ textcase }) => caseMap[textcase]};
  font-style: ${(props) => props.fontstyle};
  font-size: ${(props) => props.fontSize};
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
