import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useCart } from "../../contexts/CartContext";

const StyledCartIcon = styled.div`
  position: relative;

  &::after {
    content: "${(props) => props.cartLength}";
    position: absolute;
    top: 40%;
    right: -0.7rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background-color: var(--color-yellow);
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function CartIcon({ toggleCart }) {
  const { cart } = useCart();

  return (
    <StyledCartIcon cartLength={cart.length} onClick={toggleCart}>
      <HiOutlineShoppingBag />
    </StyledCartIcon>
  );
}

export default CartIcon;
