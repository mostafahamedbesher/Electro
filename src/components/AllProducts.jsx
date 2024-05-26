import styled from "styled-components";
import AllProductsContainer from "./AllProductsContainer";

const StyledAllProducts = styled.section`
  background-color: var(--color-zinc-50);
  padding: 5rem 0;
`;

function AllProducts() {
  return (
    <StyledAllProducts>
      <AllProductsContainer />
    </StyledAllProducts>
  );
}

export default AllProducts;
