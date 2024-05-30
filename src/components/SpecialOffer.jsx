import styled from "styled-components";
import QuantityBar from "./QuantityBar";
import Timer from "./Timer";

const StyledSpecialOffer = styled.div`
  padding: 2rem;
  border-radius: 20px;
  border: 2px solid var(--color-yellow);
`;

const StyledTxtBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  & p {
    font-size: 2rem;
    display: flex;
    flex-direction: column;

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      font-size: 2.6rem;
    }
  }

  & div {
    padding: 1.2rem 2.6rem;
    font-size: 1.5rem;
    color: var(--color-grey-light);
    background-color: var(--color-grey-dark-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 9px;

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      font-size: 2rem;
    }
  }
`;

const Img = styled.img`
  width: 100%;
`;

const OfferContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-blue);
  margin-bottom: 2rem;

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    font-size: 2.4rem;
  }
`;

const PriceOld = styled.span`
  font-size: 1.8rem;
  font-weight: 300;
  text-decoration: line-through;
  color: var(--color-grey-dark);

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    font-size: 2.2rem;
  }
`;

const PriceNew = styled.span`
  font-weight: 400;
  font-size: 2.6rem;
  color: var(--color-red-600);

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    font-size: 3rem;
  }
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

function SpecialOffer() {
  return (
    <StyledSpecialOffer>
      <StyledTxtBox>
        <p>
          <strong>Special</strong> Offer
        </p>
        <div>
          <span>Save</span>
          <span>$20</span>
        </div>
      </StyledTxtBox>

      <OfferContentBox>
        <Img src="./images/gamePad.png" alt="special offer image" />

        <ProductName>Game Console Controller + USB 3.0 Cable</ProductName>

        <PriceBox>
          <PriceOld>$99.99</PriceOld>
          <PriceNew>$79.00</PriceNew>
        </PriceBox>

        <QuantityBar />

        <Timer numHours={20} numMin={1} numSec={7} />
      </OfferContentBox>
    </StyledSpecialOffer>
  );
}

export default SpecialOffer;
