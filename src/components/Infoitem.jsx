import styled from "styled-components";

const StyledInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 1rem;

  & a:link,
  & a:visited {
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--color-grey-dark);
    transition: all 0.3s;

    /* BELOW 960 PIXELS (Tablets) */
    @media (max-width: 60em) {
      font-size: 1.2rem;
    }
  }

  & a:hover,
  & a:active {
    color: var(--color-grey-medium);
  }

  & span svg {
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.iconColor};
  }
`;

function Infoitem({ text, icon, iconColor = "#343c46" }) {
  return (
    <StyledInfoItem iconColor={iconColor}>
      <span>{icon}</span>
      <a href="#">{text}</a>
    </StyledInfoItem>
  );
}

export default Infoitem;
