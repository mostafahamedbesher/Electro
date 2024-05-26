import styled from "styled-components";
import Logo from "./Logo";
import InputSearch from "./InputSearch";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
// import { HiOutlineShoppingBag } from "react-icons/hi2";
import CartIcon from "./cart/CartIcon";
import CartList from "./cart/CartList";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8rem;
  padding: 2rem var(--padding-section);
  position: relative;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 2.8rem;
  align-items: center;
  justify-content: center;

  & svg {
    width: 2.6rem;
    height: 2.6rem;
    color: var(--color-grey-dark);
    cursor: pointer;
  }

  & span {
    font-weight: 500;
    font-size: 1.7rem;
  }
`;

function Header() {
  const [isOpenedCart, setIsOpenedCart] = useState(false);

  const { cart } = useCart();

  const cartTotalPrice = cart.reduce((acc, product) => {
    if (product) return acc + Number(product.price.slice(1));
  }, 0);

  function toggleCart() {
    setIsOpenedCart((isOpen) => !isOpen);
  }

  return (
    <StyledHeader>
      <Logo size="5.4rem" />

      <InputSearch />

      <IconsContainer>
        <HiOutlineArrowPathRoundedSquare />
        <HiOutlineHeart />

        <CartIcon toggleCart={toggleCart} />
        <span>{`$${cartTotalPrice}`}</span>
      </IconsContainer>

      {isOpenedCart && <CartList />}
    </StyledHeader>
  );
}

export default Header;
