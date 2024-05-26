import styled from "styled-components";

const StyledHeroNav = styled.nav`
  & ul {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }

  & ul li {
    font-size: 1.5rem;
    font-weight: 700;

    a:link,
    a:visited {
      color: var(--color-zinc-700);
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
