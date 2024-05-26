import styled from "styled-components";

const StyledOffersList = styled.ul`
  display: flex;
  gap: 3rem;
  padding: 5rem var(--padding-section);
`;

function OffersList({ children }) {
  return <StyledOffersList>{children}</StyledOffersList>;
}

export default OffersList;
