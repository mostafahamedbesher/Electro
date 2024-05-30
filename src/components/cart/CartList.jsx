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

  /* BELOW 544 PIXELS (Phones) */
  @media (max-width: 34em) {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }
`;

const TotalPrice = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-zinc-400);
`;

const CartButton = styled.button`
  border: none;
  padding: 1.2rem 1.8rem;
  background-color: var(--color-zinc-200);
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 30px;
  color: var(--color-grey-dark);
  margin-top: 1rem;
`;

function CartList({ cartTotalPrice }) {
  const { cart, dispatch } = useCart();

  return (
    <StyledCartList>
      {cart.length === 0 && <EmptyCartTxt>No Products in Cart</EmptyCartTxt>}

      {cart.map((product) => (
        <CartItem key={product.name} product={product} />
      ))}

      <TotalPrice>Total Price : ${cartTotalPrice}</TotalPrice>

      <CartButton onClick={() => dispatch({ type: "cart/clear" })}>
        Clear Cart
      </CartButton>
    </StyledCartList>
  );
}

export default CartList;
