import styled, { css } from "styled-components";

const caseMap = {
  upper: "uppercase",
  lower: "lowercase",
  cap: "capitalize",
};

const alignMap = {
  left: "left",
  right: "right",
  center: "center",
};

const StyledHeader = styled.header`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 2rem;
      font-weight: 600;

      @media (height < 805px), screen and (orientation: portrait) {
        font-size: 1.7rem;
      }
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1.5rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.25rem;
      font-weight: 600;
    `}

  text-transform: ${({ textcase }) => caseMap[textcase]};
  color: ${(props) => props.color};
  margin: 0;
  padding: 5px 5px 5px 5px;
  text-align: ${(align) => alignMap[align]};
`;

function Header({ children, ...rest }) {
  return <StyledHeader {...rest}>{children}</StyledHeader>;
}

export default Header;
