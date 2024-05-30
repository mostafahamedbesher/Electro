import styled from "styled-components";
import { HiMiniChevronRight } from "react-icons/hi2";

const StyledCategoeryItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  padding: 1rem 0;
  color: var(--color-zinc-700);
  cursor: pointer;
  transition: all 0.2s;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-light-1);
  }

  &:hover {
    color: var(--color-black);
    background-color: var(--color-zinc-200);
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    padding: 1.8rem 1rem;
    font-size: 1.7rem;
    font-weight: 400;
  }

  & span svg {
    color: #a1a1aa;
  }
`;

function CategoeryItem({ itemName }) {
  return (
    <StyledCategoeryItem>
      <span>{itemName}</span>

      <span>
        <HiMiniChevronRight />
      </span>
    </StyledCategoeryItem>
  );
}

export default CategoeryItem;
