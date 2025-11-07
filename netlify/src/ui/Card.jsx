import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => props.bgcolor || "var(--color-base)"};
  background-image: ${(props) => props.colorGradient || ""};
  padding: ${(props) => props.padding || "5px"};
  display: grid;
  place-items: ${(props) => props.placement || ""};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin || "10px"};
  border-radius: ${(props) => props.borderradius || "0px"};
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
  max-width: ${(props) => props.maxWidth || ""};
  width: ${(props) => props.width || ""};

  @media screen and (min-width: 800px) {
    width: 735px;
  }

  @media screen and (min-width: 1250px) {
    width: 1190px;
  }
`;

function Card({ children, ...rest }) {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
}

export default Card;
