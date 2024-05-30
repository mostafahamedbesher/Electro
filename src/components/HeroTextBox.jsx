import styled from "styled-components";
import Slider from "./Slider";

const StyledHeroTextBox = styled.div`
  justify-self: center;
  padding-top: 3rem;
  padding-left: 2.4rem;
  text-transform: uppercase;

  &p {
    font-size: 1.5rem;
    color: var(--color-grey-dark);

    /* BELOW 544 PIXELS (Phones) */
    @media (max-width: 34em) {
      font-size: 1.3rem;
    }
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    padding-left: 1rem;
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    padding-top: 1rem;
  }
`;

const H2 = styled.h2`
  font-size: 5rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 1.2rem;

  /* BELOW 960 PIXELS (Tablets) */
  @media (max-width: 60em) {
    font-size: 4.5rem;
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    font-size: 3rem;
  }
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 4rem;

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    font-size: 1.3rem;
    margin-bottom: 2.5rem;
  }
`;

const PriceBox = styled.div`
  font-size: 1.5rem;
  color: var(--color-grey-dark);
  margin-bottom: 3rem;

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    font-size: 1.8rem;
  }
`;

const Price = styled.p`
  font-size: 4.6rem;
  font-weight: 700;
  color: var(--color-grey-dark);
  position: relative;
  padding: 0 1.2rem;
  display: inline-block;

  &::before {
    content: "$";
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2.1rem;
  }

  &::after {
    content: "99";
    position: absolute;
    top: 0;
    right: -0.9rem;
    font-size: 2.1rem;
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    font-size: 5.4rem;
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    font-size: 3.4rem;
  }
`;

const Button = styled.button`
  padding: 0.8rem 4rem;
  background-color: var(--color-yellow);
  color: var(--color-grey-dark);
  font-size: 1.6rem;
  font-weight: 500;
  border: 1px solid var(--color-yellow);
  border-radius: 9px;
  margin-bottom: 5rem;

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    font-size: 1.8rem;
    padding: 1.2rem 4.6rem;
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    margin-bottom: 3rem;
  }
`;

function HeroTextBox() {
  return (
    <StyledHeroTextBox>
      <H2>The New Standard</H2>
      <H3>Under Favorable Smartwatches</H3>
      <PriceBox>
        <p>From</p>
        <Price>749</Price>
      </PriceBox>
      <Button>Start Buying</Button>
      <Slider dotsNum={6} />
    </StyledHeroTextBox>
  );
}

export default HeroTextBox;
