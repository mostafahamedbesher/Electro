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
