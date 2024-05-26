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
`;

const ImageBox = styled.div`
  width: 100%;
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
    }

    & svg {
      width: 1.8rem;
      height: 1.8rem;
      background-color: var(--color-yellow);
      border-radius: 50%;
      color: var(--color-grey-light);
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
