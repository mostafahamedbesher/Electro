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
`;

function Hero() {
  return (
    <StyledHero>
      <HeroMenu />
      <HeroContentBox />
    </StyledHero>
  );
}

export default Hero;
