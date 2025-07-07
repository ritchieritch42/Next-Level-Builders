import styled from "styled-components";

const StyledHeader = styled.header`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;

function Header({ children, ...rest }) {
  return <StyledHeader {...rest}>{children}</StyledHeader>;
}

export default Header;
