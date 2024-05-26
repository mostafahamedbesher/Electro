import styled from "styled-components";

const StyledSectionHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid var(--color-zinc-200);
  /* padding: 1rem 0; */
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
