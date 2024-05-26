import styled from "styled-components";
import { useCart } from "../../contexts/CartContext";
import CartItem from "./CartItem";

const StyledCartList = styled.ul`
  background-color: var(--color-white);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top: 2px solid var(--color-yellow);
  padding: 2rem 3rem;
  width: 35rem;
  position: absolute;
  top: 75%;
  right: 1rem;
  overflow: scroll;
`;

const EmptyCartTxt = styled.p`
  font-size: 1.5rem;
  color: var(--color-zinc-300);
  font-weight: 400;
  text-align: center;
`;

function CartList() {
  const { cart } = useCart();

  return (
    <StyledCartList>
      {cart.length === 0 && <EmptyCartTxt>No Products in Cart</EmptyCartTxt>}

      {cart.map((product) => (
        <CartItem key={product.name} product={product} />
      ))}
    </StyledCartList>
  );
}

export default CartList;
