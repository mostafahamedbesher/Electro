import styled from "styled-components";

const StyledLogo = styled.p`
  font-size: ${(props) => props.size};
  font-weight: 900;
  color: var(--color-grey-dark);

  & span {
    color: var(--color-yellow);
  }

  /* BELOW 1200 PIXELS (landscape Tablets) */
  @media (max-width: 75em) {
    font-size: 5rem;
  }

  /* BELOW 960 PIXELS (Tablets) */
  @media (max-width: 60em) {
    font-size: 4.5rem;
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    font-size: 3.4rem;
  }
`;

function Logo({ size }) {
  return (
    <StyledLogo size={size}>
      electro<span>.</span>
    </StyledLogo>
  );
}

export default Logo;
