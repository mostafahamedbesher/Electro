import styled from "styled-components";

const StyledOffersList = styled.ul`
  display: flex;
  gap: 3rem;
  padding: 5rem var(--padding-section);

  /* BELOW 1200 PIXELS (landscape Tablets) */
  @media (max-width: 75em) {
    padding: 5rem var(--padding-section-sm);
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    overflow-x: scroll;
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

function OffersList({ children }) {
  return <StyledOffersList>{children}</StyledOffersList>;
}

export default OffersList;
