import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => props.bgcolor || "var(--color-base)"};
  padding: ${(props) => props.padding || "5px"};
  display: grid;
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin || "10px"};
  border-radius: ${(props) => props.borderradius || "0px"};
`;

function Card({ children, ...rest }) {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
}

export default Card;
