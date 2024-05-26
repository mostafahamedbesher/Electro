import styled from "styled-components";

const StyledFilterList = styled.ul`
  display: grid;
  grid-template-columns: repeat(${(props) => props.gridColumns}, 1fr);
  column-gap: 5rem;
`;

const FooterItem = styled.a`
  &:link,
  &:visited {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: var(--color-grey-dark);
  }
`;

function FooterList({ items, gridColumns = 2 }) {
  return (
    <StyledFilterList gridColumns={gridColumns}>
      {items.map((item) => (
        <li key={item}>
          <FooterItem href="#">{item}</FooterItem>
        </li>
      ))}
    </StyledFilterList>
  );
}

export default FooterList;
