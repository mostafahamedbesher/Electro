import styled from "styled-components";

const StyledItemLink = styled.a`
  &:link,
  &:visited {
    display: block;
    padding: 1rem 0;
    color: var(--color-zinc-700);
    border-bottom: 1px solid var(--color-grey-light-1);
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      padding: 1.8rem 1rem;
      font-size: 1.7rem;
      font-weight: 400;
    }
  }

  &:hover,
  &:active {
    background-color: var(--color-zinc-100);
  }
`;

function CatogeriesItemLink({ children }) {
  return <StyledItemLink href="#">{children}</StyledItemLink>;
}

export default CatogeriesItemLink;
