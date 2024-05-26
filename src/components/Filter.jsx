import { useState } from "react";
import styled from "styled-components";
import FilterItem from "./FilterItem";

const StyledFilter = styled.ul`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.horizantalAlign};
  gap: 2.4rem;
  border-bottom: ${(props) =>
    props.hasBorder ? "2px solid var(--color-zinc-200)" : "none"};
  margin-bottom: ${(props) => (props.borderType === "round" ? "0" : "1rem")};
  padding: 0 1.6rem;
`;

function Filter({
  filterLabels,
  horizantalAlign = "center",
  hasBorder = true,
  borderType,
}) {
  const [curOpen, setCurOpen] = useState(filterLabels[0]);

  return (
    <StyledFilter
      horizantalAlign={horizantalAlign}
      hasBorder={hasBorder}
      borderType={borderType}
    >
      {filterLabels.map((label) => (
        <FilterItem
          label={label}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
          key={label}
          borderType={borderType}
        />
      ))}
    </StyledFilter>
  );
}

export default Filter;
