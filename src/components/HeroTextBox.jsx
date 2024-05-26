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
  }
`;

const H2 = styled.h2`
  font-size: 5rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 4rem;
`;

const PriceBox = styled.div`
  font-size: 1.5rem;
  color: var(--color-grey-dark);
  margin-bottom: 3rem;
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
