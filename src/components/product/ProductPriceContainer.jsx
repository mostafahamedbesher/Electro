import styled from "styled-components";

const ProductPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-white);
  }
`;

export default ProductPriceContainer;
