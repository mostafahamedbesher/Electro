import styled from "styled-components";
import ProductName from "../product/ProductName";
import ProductPriceEl from "../product/ProductPriceEl";
import { HiOutlineTrash } from "react-icons/hi2";

const StyledCartItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-zinc-200);
  padding: 1rem;
  border-radius: 9px;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-light);
  }
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 7rem;
    height: 7rem;
  }
`;

const TxtBox = styled.div`
  margin-bottom: 0.5rem;
`;

const IconBox = styled.div`
  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-red-600);
    cursor: pointer;
  }
`;

function CartItem({ product }) {
  if (!product) return null;

  const { img, name, price } = product;

  return (
    <StyledCartItem>
      <ImgBox>
        <img src={`./images/${img}`} alt="Cart Product image" />
      </ImgBox>

      <TxtBox>
        <ProductName>{name}</ProductName>
        <ProductPriceEl>{price}</ProductPriceEl>
      </TxtBox>

      <IconBox>
        <HiOutlineTrash />
      </IconBox>
    </StyledCartItem>
  );
}

export default CartItem;
