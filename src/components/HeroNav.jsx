import styled from "styled-components";

const StyledHeroNav = styled.nav`
  & ul {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    li {
      font-size: 1.5rem;
      font-weight: 700;

      /* BELOW 960 PIXELS (Tablets) */
      @media (max-width: 60em) {
        font-size: 1.4rem;
      }

      /* BELOW 704 PIXELS (Small Tablets) */
      @media (max-width: 44em) {
        font-size: 1.6rem;
      }

      a:link,
      a:visited {
        color: var(--color-zinc-700);
      }
    }

    /* BELOW 960 PIXELS (Tablets) */
    @media (max-width: 60em) {
      gap: 1.5rem;
    }
  }
`;

function HeroNav() {
  return (
    <StyledHeroNav>
      <ul>
        <li>
          <a style={{ color: "var(--color-red-600)" }} href="#">
            Super Deals
          </a>
        </li>
        <li>
          <a href="#">Featured Brands</a>
        </li>
        <li>
          <a href="#">Trending Styles</a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </StyledHeroNav>
  );
}

export default HeroNav;
