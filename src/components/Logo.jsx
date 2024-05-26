import styled from "styled-components";

const StyledLogo = styled.p`
  font-size: ${(props) => props.size};
  font-weight: 900;
  color: var(--color-grey-dark);

  & span {
    color: var(--color-yellow);
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
