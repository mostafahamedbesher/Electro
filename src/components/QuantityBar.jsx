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
  }
`;

const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 1.6rem;
  border-radius: 10px;
  background-color: var(--color-grey-light);
`;

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.width}%;
  height: 1.6rem;
  border-radius: 10px;
  background-color: var(--color-yellow);
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
