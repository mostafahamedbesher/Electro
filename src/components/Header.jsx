import styled from "styled-components";
import Logo from "./Logo";
import InputSearch from "./InputSearch";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";

import { HiOutlineBars3 } from "react-icons/hi2";

import { HiOutlineXMark } from "react-icons/hi2";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

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

  /* BELOW 1200 PIXELS (landscape Tablets) */
  @media (max-width: 75em) {
    padding: 2rem var(--padding-section-sm);
  }

  /* BELOW 960 PIXELS (Tablets) */
  @media (max-width: 60em) {
    gap: 4rem;
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    background-color: var(--color-yellow);
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    gap: 3rem;
    padding: 2rem 2rem;
  }
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

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      width: 3.2rem;
      height: 3.2rem;
    }

    /* BELOW 544 PIXELS (Phones) */
    @media (max-width: 34em) {
      width: 3rem;
      height: 3rem;
    }

    /* BELOW 544 PIXELS (Phones) */
    @media (max-width: 34em) {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
`;

const CartPrice = styled.span`
  font-weight: 500;
  font-size: 1.7rem;

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    font-size: 1.9rem;
  }

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  & svg {
    width: 4rem;
    height: 4rem;
    color: var(--color-grey-dark);

    /* BELOW 544 PIXELS (Phones) */
    @media (max-width: 34em) {
      width: 3.4rem;
      height: 3.4rem;
    }
  }

  /* BELOW 704 PIXELS (Small Tablets) */
  @media (max-width: 44em) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function Header({ openMenu }) {
  const [isOpenedCart, setIsOpenedCart] = useState(false);

  // state for opening search input for phones(responsive)
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const { cart } = useCart();

  const cartTotalPrice = cart.reduce((acc, product) => {
    if (product) return acc + Number(product.price.slice(1));
  }, 0);

  function toggleCart() {
    setIsOpenedCart((isOpen) => !isOpen);
  }

  return (
    <StyledHeader>
      <MobileMenuIcon onClick={openMenu}>
        <HiOutlineBars3 />
      </MobileMenuIcon>

      <Logo size="5.4rem" />

      <InputSearch isOpenSearch={isOpenSearch} />

      <IconsContainer>
        {!isOpenSearch ? (
          <HiOutlineMagnifyingGlass onClick={() => setIsOpenSearch(true)} />
        ) : (
          <HiOutlineXMark onClick={() => setIsOpenSearch(false)} />
        )}

        <HiOutlineArrowPathRoundedSquare />
        <HiOutlineHeart />

        <CartIcon toggleCart={toggleCart} />

        <CartPrice>{`$${cartTotalPrice}`}</CartPrice>
      </IconsContainer>

      {isOpenedCart && <CartList cartTotalPrice={cartTotalPrice} />}
    </StyledHeader>
  );
}

export default Header;
