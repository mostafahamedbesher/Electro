import styled from "styled-components";

const FilterItemLabel = styled.span`
  display: inline-block;
  font-size: 1.7rem;
  color: var(--color-grey-dark);
  font-weight: ${(props) => (props.clicked ? "700" : "400")};
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
  padding: ${(props) => props.borderType === "line" && "0.5rem 0"};
  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  ${(props) =>
    props.borderType === "round" &&
    props.curOpen === props.label &&
    `padding: 0.5rem 1.6rem;
  border: 2px solid var(--color-yellow);
  border-radius: 30px;`}
`;

function FilterItem({ label, curOpen, setCurOpen, borderType = "line" }) {
  function handleClick() {
    setCurOpen(label);
  }

  return (
    <StyledFilterItem
      onClick={handleClick}
      label={label}
      curOpen={curOpen}
      borderType={borderType}
    >
      <FilterItemLabel href="#" clicked={curOpen === label}>
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
