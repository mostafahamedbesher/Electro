import styled from "styled-components";
import { HiListBullet } from "react-icons/hi2";
import CatogeriesList from "./CatogeriesList";

const StyledHeroMenu = styled.div`
  box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.07);
  width: 25rem;
  border-radius: 10px;
  background-color: var(--color-grey-light);
  z-index: 100;

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    z-index: 9999;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    border-radius: 0;
    transform: translateX(-300px);
    transition: all 0.3s ease-in;

    ${(props) =>
      !props.isOpenMenu
        ? `opacity: 0;
     pointer-events: none;
     visibility: hidden;`
        : `transform: translateX(0);`}

    /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
      width: 55%;
    }
  }
`;

const MenuHeader = styled.div`
  padding: 1rem 1.6rem;
  background-color: var(--color-yellow);
  font-size: 1.7rem;
  font-weight: 500;
  color: var(--color-grey-dark);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1rem;

  & span svg {
    width: 2.4rem;
    height: 2.4rem;
    font-weight: 500;
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    display: none;
  }
`;

function HeroMenu({ isOpenMenu }) {
  return (
    <StyledHeroMenu isOpenMenu={isOpenMenu}>
      <MenuHeader>
        <span>
          <HiListBullet />
        </span>{" "}
        All Departments
      </MenuHeader>

      <CatogeriesList />
    </StyledHeroMenu>
  );
}

export default HeroMenu;
