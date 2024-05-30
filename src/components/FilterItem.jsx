import styled from "styled-components";

const FilterItemLabel = styled.span`
  display: inline-block;
  font-size: 1.7rem;
  color: var(--color-grey-dark);
  font-weight: ${(props) => (props.clicked ? "700" : "400")};
  transition: all 0.2s;

  padding: ${(props) => props.borderType === "line" && "0.5rem 0"};

  ${(props) =>
    props.borderType === "round" &&
    props.curOpen === props.label &&
    `padding: 0.5rem 1.6rem;
     border: 2px solid var(--color-yellow);
     border-radius: 30px;
     background-color: var(--color-yellow);`}

  /* BELOW 960 PIXELS (Tablets) */
  @media (max-width: 60em) {
    font-size: 1.5rem;
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    font-size: 1.9rem;
  }

  /* BELOW 544 PIXELS (Phones)
  @media (max-width: 34em) {
    font-size: 1.4rem;
  } */
`;

const FilterItemBorder = styled.div`
  position: absolute;
  bottom: -0.3rem;
  width: 100%;
  background-color: var(--color-yellow);
  height: 2px;
  transform: translate(0, -50%);
  display: flex;
  justify-content: center;

  & div {
    width: 1rem;
    height: 0.6rem;
    border-radius: 0 0 50% 50%;
    background-color: var(--color-yellow);
  }
`;

const StyledFilterItem = styled.li`
  font-weight: 400;

  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    flex-shrink: 0;
  }
`;

function FilterItem({ label, curOpen, setCurOpen, borderType = "line" }) {
  function handleClick() {
    setCurOpen(label);
  }

  return (
    <StyledFilterItem onClick={handleClick}>
      <FilterItemLabel
        href="#"
        clicked={curOpen === label}
        borderType={borderType}
        label={label}
        curOpen={curOpen}
      >
        {label}
      </FilterItemLabel>

      {curOpen === label && borderType === "line" && (
        <FilterItemBorder>
          <div></div>
        </FilterItemBorder>
      )}
    </StyledFilterItem>
  );
}

export default FilterItem;
