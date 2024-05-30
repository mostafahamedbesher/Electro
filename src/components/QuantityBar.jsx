import { useState } from "react";
import styled from "styled-components";
import { Product_TOTAL_QUANTITY } from "../utils/constants";

const StyledQuantityBar = styled.div`
  margin: 1rem 0;
`;

const ValuesBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12rem;
  margin-bottom: 1.5rem;
  margin-top: 2rem;

  & p {
    font-size: 1.4rem;
    font-weight: 400;

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      font-size: 2rem;
    }

    /* BELOW 544 PIXELS (Phones) */
    @media (max-width: 34em) {
      font-size: 1.8rem;
    }
  }

  /* BELOW 960 PIXELS (Tablets) */
  @media (max-width: 60em) {
    gap: 6rem;
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    gap: 15rem;
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    gap: 10rem;
  }
`;

const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 1.6rem;
  border-radius: 10px;
  background-color: var(--color-grey-light);

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    height: 2rem;
  }
`;

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.width}%;
  height: 1.6rem;
  border-radius: 10px;
  background-color: var(--color-yellow);

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    height: 2rem;
  }
`;

function QuantityBar() {
  const [avialable, setAvailable] = useState(6);
  const remainaingQuantity = Product_TOTAL_QUANTITY - avialable;
  const barWidth = Math.floor((avialable / Product_TOTAL_QUANTITY) * 100);

  return (
    <StyledQuantityBar>
      <ValuesBox>
        <p>
          Avaliable : <strong>{avialable}</strong>
        </p>
        <p>
          Already Sold : <strong>{remainaingQuantity}</strong>
        </p>
      </ValuesBox>

      <ProgressBar>
        <Progress width={barWidth} />
      </ProgressBar>
    </StyledQuantityBar>
  );
}

export default QuantityBar;
