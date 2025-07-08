import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => props.bgColor};
  margin: 8px;
  padding: 5px;
`;

function Card({ children, ...rest }) {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
}

export default Card;
