import styled from "styled-components";
import SpecialOffer from "../SpecialOffer";
import ProductsList from "./ProductsList";
import Filter from "../Filter";

const StyledProducts = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  justify-items: center;
  padding: 0 var(--padding-section);
  padding-bottom: 5rem;
  align-items: start;

  /* BELOW 1200 PIXELS (landscape Tablets) */
  @media (max-width: 75em) {
    padding: 0 var(--padding-section-sm);
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    grid-template-columns: 1fr;
  }
`;

function Products() {
  return (
    <StyledProducts>
      <SpecialOffer />
      <div>
        <Filter filterLabels={["Featured", "On Sale", "Top Rated"]} />
        <ProductsList />
      </div>
    </StyledProducts>
  );
}

export default Products;
