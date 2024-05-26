import styled from "styled-components";

const ProductPriceEl = styled.p`
  font-size: ${(props) => (props.offerPrice ? "1.4rem" : "1.7rem")};
  font-weight: 400;
  text-decoration: ${(props) => (props.offerPrice ? "line-through" : "none")};
  color: ${(props) =>
    props.offerPrice ? "var(--color-zinc-400)" : "var(--color-grey-dark)"};
`;

export default ProductPriceEl;
