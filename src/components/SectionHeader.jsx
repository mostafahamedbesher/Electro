import styled from "styled-components";

const StyledSectionHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid var(--color-zinc-200);

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    /* flex-direction: column; */
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;

const HeadingText = styled.h3`
  font-size: 2.8rem;
  font-weight: 500;
  padding: 1rem 0;
  position: relative;

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0, 80%);
    background-color: var(--color-yellow);
  }

  /* BELOW 960 PIXELS (Tablets) */
  @media (max-width: 60em) {
    font-size: 2.4rem;
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    font-size: 2.2rem;
    margin-right: 1rem;
  }
`;

function SectionHeader({ children, headingTxt }) {
  return (
    <StyledSectionHeader>
      <HeadingText>{headingTxt}</HeadingText>
      {children}
    </StyledSectionHeader>
  );
}

export default SectionHeader;
