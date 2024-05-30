import styled from "styled-components";
import HeroNav from "./HeroNav";

const StyledHeroHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  & p {
    font-size: 1.4rem;
    color: var(--color-zinc-700);

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      font-size: 1.6rem;
    }
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    display: none;
  }
`;

function HeroHeader() {
  return (
    <StyledHeroHeader>
      <HeroNav />
      <p>Free shipping on orders $50+</p>
    </StyledHeroHeader>
  );
}

export default HeroHeader;
