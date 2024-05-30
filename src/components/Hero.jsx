import styled from "styled-components";
import HeroMenu from "./HeroMenu";
import HeroContentBox from "./HeroContentBox";

const StyledHero = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 2rem;
  padding: 2rem var(--padding-section);
  height: 75vh;
  background-image: url("./images/hero-background.jpeg");
  background-size: cover;
  height: 100%;

  /* BELOW 1200 PIXELS (landscape Tablets) */
  @media (max-width: 75em) {
    padding: 2rem var(--padding-section-sm);
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    grid-template-columns: 1fr;
    padding: 2rem 2rem;
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    padding: 2rem 0.5rem;
  }
`;

function Hero({ isOpenMenu }) {
  return (
    <StyledHero>
      <HeroMenu isOpenMenu={isOpenMenu} />
      <HeroContentBox />
    </StyledHero>
  );
}

export default Hero;
