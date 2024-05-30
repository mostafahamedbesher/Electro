import styled from "styled-components";
import { HiMiniChevronRight } from "react-icons/hi2";

const StyledOffersItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background-color: var(--color-zinc-100);
  padding: 3rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    padding: 2rem 0.5rem;
  }
`;

const ImageBox = styled.div`
  width: 85%;

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    width: 75%;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const TextBox = styled.div`
  & p {
    text-transform: uppercase;
    font-size: 2.3rem;
    margin-bottom: 1.6rem;
    font-weight: 300;

    /* BELOW 960 PIXELS (Tablets) */
    @media (max-width: 60em) {
      font-size: 2rem;
    }

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      font-size: 3.4rem;
    }

    /* BELOW 544 PIXELS (Phones) */
    @media (max-width: 34em) {
      font-size: 2.6rem;
    }
  }

  & span {
    font-weight: 700;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 1rem;

    & span {
      font-size: 1.8rem;

      /* BELOW 704 PIXELS (Small Tablets) */
      @media (max-width: 44em) {
        font-size: 2.6rem;
      }

      /* BELOW 544 PIXELS (Phones) */
      @media (max-width: 34em) {
        font-size: 2rem;
      }
    }

    & svg {
      width: 1.8rem;
      height: 1.8rem;
      background-color: var(--color-yellow);
      border-radius: 50%;
      color: var(--color-grey-light);

      /* BELOW 704 PIXELS (Small Tablets) */
      @media (max-width: 44em) {
        width: 2.6rem;
        height: 2.6rem;
      }

      /* BELOW 544 PIXELS (Phones) */
      @media (max-width: 34em) {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
`;

function OffersItem({ imgNum, textElement }) {
  return (
    <StyledOffersItem>
      <ImageBox>
        <Image src={`./images/offers-${imgNum}.png`} alt="offer image" />
      </ImageBox>

      <TextBox>
        {textElement}
        <div>
          <span>Shop now</span>
          <HiMiniChevronRight />
        </div>
      </TextBox>
    </StyledOffersItem>
  );
}

export default OffersItem;
