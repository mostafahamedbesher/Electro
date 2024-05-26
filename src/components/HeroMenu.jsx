import styled from "styled-components";
import { HiListBullet } from "react-icons/hi2";
import CatogeriesList from "./CatogeriesList";

const StyledHeroMenu = styled.div`
  box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.07);
  width: 25rem;
  border-radius: 10px;
  background-color: var(--color-grey-light);
  z-index: 100;
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
`;

function HeroMenu() {
  return (
    <StyledHeroMenu>
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
