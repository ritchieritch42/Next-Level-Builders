import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => props.bgcolor};
  margin: 8px;
  padding: 5px;
  border-radius: 10px;
  display: grid;
  gap: ${(props) => props.gap};
`;

function Card({ children, ...rest }) {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
}

export default Card;
