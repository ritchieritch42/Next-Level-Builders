import styled from "styled-components";

const caseMap = {
  upper: "uppercase",
  lower: "lowercase",
  cap: "capitalize",
};

const StyledTextOverlay = styled.div`
  margin: 0px;
  width: 75%;
  padding: 5px 0px 0px 0px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  text-transform: ${({ textcase }) => caseMap[textcase]};
  font-style: ${(props) => props.fontstyle};

  /* Centered */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function TextOverlay({ children, ...rest }) {
  return <StyledTextOverlay {...rest}>{children}</StyledTextOverlay>;
}

export default TextOverlay;
